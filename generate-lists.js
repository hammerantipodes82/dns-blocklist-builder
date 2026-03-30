#!/usr/bin/env node
// Generates pre-built blocklist files from index.html domain data.
// Run: node generate-lists.js
// Used by: .github/workflows/update-lists.yml

const fs = require('fs');
const path = require('path');

// Extract CATS array from index.html
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const match = html.match(/const CATS=(\[[\s\S]*?\]);/);
if (!match) { console.error('Could not find CATS array in index.html'); process.exit(1); }

// eslint-disable-next-line no-eval
const CATS = eval(match[1]);

const allDomains = [...new Set(CATS.flatMap(c => c.domains))].sort();
const date = new Date().toISOString().split('T')[0];

const header = (fmt) => [
  '# ============================================================',
  `# DNS Blocklist Builder – All Categories`,
  `# Format: ${fmt}`,
  `# Generated: ${date}`,
  `# Categories: ${CATS.length}`,
  `# Domains: ${allDomains.length}`,
  `# Source: https://github.com/DanielEnki420/dns-blocklist-builder`,
  `# Issues: https://github.com/DanielEnki420/dns-blocklist-builder/issues`,
  '# ============================================================',
  ''
].join('\n');

const listsDir = path.join(__dirname, 'lists');
if (!fs.existsSync(listsDir)) fs.mkdirSync(listsDir);

const files = {
  'blocklist-all.hosts.txt':    { fmt: 'hosts (/etc/hosts)',  fn: d => `0.0.0.0 ${d}` },
  'blocklist-all.pihole.txt':   { fmt: 'Pi-hole adlist',      fn: d => d },
  'blocklist-all.dnsmasq.conf': { fmt: 'dnsmasq',             fn: d => `address=/${d}/0.0.0.0` },
  'blocklist-all.adguard.txt':  { fmt: 'AdGuard Home',        fn: d => `||${d}^` },
  'blocklist-all.unbound.conf': { fmt: 'Unbound',             fn: d => `local-zone: "${d}." static` },
  'blocklist-all.rpz.txt':      { fmt: 'RPZ (BIND9)',         fn: d => `${d}. CNAME .` },
};

for (const [filename, { fmt, fn }] of Object.entries(files)) {
  const content = header(fmt) + allDomains.map(fn).join('\n') + '\n';
  fs.writeFileSync(path.join(listsDir, filename), content);
  console.log(`✓ ${filename} (${allDomains.length} domains)`);
}

console.log(`\nDone: ${allDomains.length} domains, ${CATS.length} categories, ${Object.keys(files).length} formats`);
