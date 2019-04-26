---
path: "/post-xss"
date: "2019-04-26T22:12:03.284Z"
title: "Cross-site Scripting (XSS)"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Today’s topic: Cross-site scripting (XSS)

Cross-site scripting is when an attacker injects client-side scripts into a web page that can be seen by other viewers of the same web page. XSS is one of the most common publicly reported security vulnerability.

For example, if you have a blog where users can add comments to your blog posts, an attacker can write a script in that comment and submit it. That will add the script comment in the comment section. When another user comes to that page, the script will execute.

Other things that a hacker can do using XSS are:
</br>1️⃣Spreading worms on social media sites - an executable program that replicates itself in order to spread to other systems
</br>2️⃣Session hijacking - can steal a cookie containing the session ID of a user to a remote site under the hacker’s control
</br>3️⃣Identity theft - if a user enters sensitive information to a compromised website, the details can be stolen

The ways to prevent this are:
</br>1️⃣Sanitize your inputs - any input that you get from a user should be checked and cleaned out.
</br>2️⃣Content Security Policy (CSP) - add CSP to your headers to whitelist where JavaScript can be loaded and executed from. For example, Content-Security-Policy: script-src 'self' https://apis.google.com. This states that JavaScript can only be run from our own domain name and google APIs. If you are using NodeJS, check out the content-security-policy npm package.
</br>3️⃣Secure & HTTPOnly Cookies - mark cookies as HTTP-only, this means that cookies will be received, stored and sent by the browser but cannot be modified or read by JavaScript.

Let me know if you have any questions!

Happy Friday and have a great weekend!!🤩

### #buildtheweb #buildupdevs #code #coder #codingisfun #codinglife #computerscience #comp #dev #developer #devlife #educateyourself #fullstackdeveloper #geek #learntocode #lifeofadeveloper #programming #programmerrepublic #softwaredeveloper #softwareengineer #webdeveloper #womenintech #worldcode #javascript #html #css #instatech #momswhocode #momscancode
