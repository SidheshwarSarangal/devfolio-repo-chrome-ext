# 🚀 Chrome-ext-webpage-data

## 📄 License Notice

**Copyright © 2025 Sidheshwar Sarangal**  
All rights reserved.

This repository may be **cloned from github repo and used** for personal purposes only.  
It may **not be copied, modified, or distributed** in any form without **explicit written permission** from the author.

No license is granted beyond basic usage and cloning.

For permissions or inquiries, please contact: **sidheshwar.sarangal@gmail.com**

---

**Chrome-ext-webpage-data** is a simple and powerful Chrome extension that allows users to extract **text and images** from any webpage, convert them into a readable format, and **download the content as a `.txt` file**.

---

## 🔗 Visit this WEBPAGE to know more about this extension

Check out the deployed version here:  
[🚀 chrome--extension-info Webpage](https://sidheshwarsarangal.github.io/ext-info-new/)

---

## 📹 Demo Video

Watch the full demo here: [Demo Video](https://drive.google.com/file/d/1f2CwP2pccsIQBOZEgyDaVbZBqgbGYzej/view?usp=sharing)

> This video walks you through the implementation of this chrome extension.

---

## 📦 Features

- Useful for product managers and consultants as it enables them to instantly get summerized and precise information from web pages!!!!
- No need to go through a lot of data. Just Use this extension and make it simple for you to collect information from internet.
- 📝 Extracts all visible text and images from the current webpage  
- 📁 Converts extracted data into a plain text format  
- ⬇️ Automatically downloads the result as a `.txt` file  
- ⚡️ Lightweight, fast, and easy to use

---

## 🛠️ How to Use

1. Clone this repository and install packages:
   ```bash
   git clone https://github.com/your-username/chrome-ext-webpage-data.git
   ```
   Get into devfolio-repo-chrome-ext and do:
   ```bash
   npm i
   ```
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top right corner)
4. Click **"Load unpacked"** and select the cloned project folder
5. Navigate to any webpage you'd like to extract data from
6. Click the **Extensions** icon (puzzle piece) in the top-right corner of Chrome
7. Select **"My Chrome Extension"**
8. Click the **"Get Info!!!!"** button

✨ Wait a moment — a `.txt` file with the extracted content will be automatically downloaded!

---

## 🧹 Troubleshooting

If you're facing issues with the extension not working or the `dist` folder missing, try the following:

```bash
# Remove the old 'dist' folder
rm -rf dist/

# Rebuild the extension bundle
npx webpack --config webpack.config.js
```
If you are getting multiple downloadings or very crouded or wrong downloaded files, then go to that extension in chrome://extensions/, click on errors and then clear them and then reload the extension. Then, it will work properly.

---

## 📌 Note

Make sure you have `Node.js` installed globally.
