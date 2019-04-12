---
path: "/post-hashing"
date: "2018-09-14T22:12:03.284Z"
title: "What is Hashing?"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Hey All! Todays topic is: Hashing (part 3 out of 4 about SSH connections)
🔸
Once an SSH connection is established, an issue that can occur is that a third party can act like the server or the client and tamper messages being sent. To be able to verify that a message has not been modified, we use hashing.
🔸
Hash functions generate a unique value for each input that it gets (shown in the picture, from Andrei Neagoie’s course). These are one-way functions meaning that when an input is hashed/encrypted, it cannot be decrypted.
🔸
Hashing is done using HMACs (Hash-based Message Authentication Codes). Using a hash function, each message that is transmitted must contain a MAC. The MAC is a hash generated using the symmetric key, the packet sequence number and the message contents. All of this is sent through a hash function which will output the hash.
🔸
As an example, when a server sends over information to a client, the client will receive the packet which contains the message contents, the packet sequence number and the hash. The client side will then use it’s symmetric key (which is the same key that the server side has), the packet sequence number and the message contents it received, run it through the same hash function and see what hash it generates. If the hash that the client side generated is the same as the hash it received, then the message has not been tampered with which proves the authenticity of the message.
🔸
Have an awesome weekend!! 😎
🔸

### #programmers #womenintech #programmerrepublic #worldcode #coder #web #coding #develop #nerdlife #softwaredeveloper #buildtheweb #programmerslife #fullstacklife #thedevlife #learning #girlswhocode #educateyourself #weprogrammers #worldcode #udemy
