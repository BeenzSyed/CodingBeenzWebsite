---
path: "/post-http-vs-https"
date: "2019-04-25T22:12:03.284Z"
title: "HTTP vs HTTPS"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Today’s topic: HTTP vs HTTPS

HTTP is a clear text protocol which means when we send information from the client to a server, it’s in plain text. If anyone intercepts that message, they can read it. If you use a website that uses only HTTP and it requires a username/password, do not use it! That means that your username and password are being sent over the wire without being encrypted and anyone can intercept it. Any website in which you need to enter sensitive user information should use HTTPS.

HTTPS provides the security needed to for users to feel safe while sending and receiving sensitive information.

HTTPS has two main purposes:
</br>1️⃣Authenticate the website being accessed - The server has to prove its identity to the client using a TLS (Transport Layer Security) or SSL (Secure Sockets Layer) certificate (SSL is now deprecated). A TLS certificate contains data like the owner of the website, the domain it’s attached to, the certificate’s public key, digital signature and the certificate’s validity dates.
</br>2️⃣Protect the privacy and safety of the data exchanged while in transit - Once the website’s authenticity has been proved, the data being sent is encrypted. This protects the data from being tampered with and helps to prevent man-in-the-middle attacks. The encryption algorithm used is very secure so even if someone is able to intercept your data, they won't be able to read it because they won't know how to decrypt it.

Check out <u>[letsencrypt.org](letsencrypt.org)</u> or <u>[cloudflare.com](cloudflare.com)</u> to setup HTTPS for your website!

### #buildtheweb #justdvlpr #programmers #webdeveloper #webdevelopment #worldcode #softwaredeveloper #webdevelopers #dev #webdev #peoplewhocode #codingdays #programming #programmer #codes #devparadise #coder #codingislife #frontend #backend #programmerrepublic #developer #programmerslife #http #https #developers #instatech #educateyourself #tech
