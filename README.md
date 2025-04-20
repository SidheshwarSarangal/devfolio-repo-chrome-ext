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

## The problem it solves

Many companies across the world require a lot of data (real world data like market news, statistics,etc.) for which they have hired consultants, product managers and data collectors. So, when these people are required to go through different websites to collect data, they usually spend a lot of time and their work becomes hectic. In order to make their task easy, this chrome extension can be used to extract all the text and image information from webpages in just one click!

Mayebe, there could have been other ways too to get extracted information from webpages, but I chose creating a chrome extension because it is easy for end user to work with. Just going to the top right side of the chrome browser, selecting the extension and just one click. Easy!

Going through ten pages and reading every single line is difficult than just going on each page and letting this ai-powered chrome extension to do its work. This can definitely help data collectors, consultants and product managers collect data quickly and easily.

---

## Key Development Processes
- Technologies used: Manifest 3, webpack, javascript and HTML.
- The text data extracted from the webpage is first cut short before sendig it to ai. The unnecesary blank spaces, tags and other aspects are removed first before sending. This is done to reduce the number of input tokens for that ai api call.
- The images are taken from the display in form of url links and not screenshots.
- These urls are then stored in a set and not a list before sending them to ai. This is becuase, during reading the webpage, it may take same image multiple times, which will unnecessarily increase the input calls resulting in wasting of a lot of tokens.
- First the summerized text information is put to the text file and then the information extracted from the different images one by one, with each image first and then the corresponding information about it.
- And, finally when the .txt file is completed, then it is downloaded.

---

## Challenges I ran into

-> First it it took me little while to learn to build chrome extensions, learning how it works. Also, finding how in general, all the webpages have common about the structure of their webpages frontend code(like different tags, image tag, etc). How popup, background script and content script work. Also how to work with ai api keys. (overall, it took me 1 day)
-> Working on the files, by taking baby steps, to finish all the tasks from the click to the end .txt file.
-> I learned that we need to compile using webpack bundler because many aspects we cant just directly use in a chrome extension in the same way we use them in creating websites.
-> Optimizing space and reducing token count by cutting short the text data from the webpage and using set(and not list) to store the url of the images present on the webpage.
-> Initially I was taking screenshots of the webpage to read the images but it was very difficult to work with them and use them in ai api call so I changed my approach and made use of image urls.

---

## 📦 Features

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
