---
path: "/post-symmetrical-encryption"
date: "2018-09-12T22:12:03.284Z"
title: "Symmetrical Encryption"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Hey All! I hope you all are having a productive week so far! 👍
🔸
Let’s talk a bit about ssh. SSH (Secure Shell) is a remote administration protocol that allows users to control and modify their remote servers over the Internet. It was created as a secure replacement for the unencrypted Telnet. It provides a secure way to authenticate a remote user and transfer data between the client and host server.
🔸
Encryption is used to make SSH secure. Encryption translates data into another form, so that only people with access to a secret key or password can read it.
🔸
There are 3 different encryption technologies used by SSH:
1️⃣Symmetrical encryption
2️⃣Asymmetrical encyption
3️⃣Hashing
🔸
I’ll divide this out into 4 posts - one encryption technique per post and then I’ll bring it all together in the 4th post.
🔸
Today we’ll go through symmetric encryption. In symmetric encryption, a secret key is used by both the client and the server to encrypt and decrypt information (shown in the pic, taken from Andrei Neagoie’s course). This type of encryption scheme is called "shared secret" encryption, or "secret key" encryption. There is typically only a single key that is used for all operations. Anyone possessing the secret key can decrypt the message being transferred.
🔸
We need to be able to ensure that the secret key is only given to the client and server that want to communicate with each other and does not get into the hands of someone malicious. To do this, we have to send over the secret key in a secure way, this done through the Key Exchange Algorithm which uses asymmetric encryption. We'll talk about asymmetric encryption more in detail in the next post!
🔸

### #programmers #womenintech #programmerrepublic #worldcode #coder #web #coding #develop #nerdlife #softwaredeveloper #buildtheweb #programmerslife #fullstacklife #thedevlife #learning #girlswhocode #educateyourself #weprogrammers #udemy #andreineagoie
