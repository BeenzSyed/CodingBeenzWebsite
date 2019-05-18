---
path: "/post-hashing"
date: "2019-05-15T22:12:03.284Z"
title: "What is Hashing?"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

The purpose of hashing is to ensure integrity. So that if something changes, you know that it’s changed. Hashing takes in an arbitrary input and produces a fixed length string.

Hashing has 6 properties in order to be considered secure:
</br>1️⃣Deterministic - the same input will always produce the same output
</br>2️⃣Quick computation - the hash function should be able to produce the output quickly
</br>3️⃣Pre-image resistance - it should not be possible to go from the output to the input
</br>4️⃣Small change in the input changes the output - any modification to the input results in a drastic change to the hash
</br>5️⃣Collision resistant - two different inputs cannot produce the same hash
</br>6️⃣Puzzle friendly - follows the equation H(k|x) = Y, where k is a value chosen from a significantly large distribution and x is the data.

Hashes increase security by ensuring that transmitted messages have not been tampered with. The sender generates a hash of the message to be sent, encrypts it, and sends it with the message itself. The recipient then decrypts both the message and the hash, produces another hash from the received message and compares the two hashes. If they’re the same, there is a high probability that the message was not tampered with.

### #buildupdevs #js #webdeveloper #computerscience #compsci #programming #developers #html #css #coding #webdevelopment #html5 #webdev #instatech #software #programmers #frontend #backend #softwareengineer #worldcode #peoplewhocode #educateyourself #justdvlpr #codingdays #fullstacklife #devparadise #hashing
