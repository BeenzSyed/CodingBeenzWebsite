---
path: "/post-asymmetrical-encryption"
date: "2018-09-13T22:12:03.284Z"
title: "Asymmetrical Encryption"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Hi All! Todays topic is: Asymmetrical encryption
🔸
Asymmetrical encryption uses two separate keys for encryption and decryption. These two keys are known as the public key and the private key which form a public-private key pair. Each client and server have their own public-private key pair. The public key is openly distributed and shared. The private key must remain private for the connection to be secured, no third party must ever know it.
🔸
When a client and server want to communicate, the client and server will exchange their public keys (shown in the picture, this is from Andrei Neagoie’s course). If the client wants to send information over the server, the client will use the server's public key to encrypt the message. The encrypted message will then be sent over to the server and the server can use it’s own private key to decrypt the message.
🔸
The private key cannot be mathematically computed from the public key. A message that is encrypted by a machine’s public key can only be decrypted by the same machine’s private key. It’s a 1-way relationship.
🔸
For SSH, asymmetrical encryption is only used during the Key Exchange Algorithm. The key exchange algorithm used for SSH is known as the Diffie-Helman Key Exchange Algorithm. This algorithm creates the symmetrical key. This algorithm allows both the client and the server to generate the secret key which will then be used going forward to encrypt the entire communication session.
🔸
Let me know if you have any questions! This can take a while to digest.
🔸
Have a great day and Happy Programmers Day!! :)
🔸

### #programmers #womenintech #programmerrepublic #worldcode #coder #web #coding #develop #nerdlife #softwaredeveloper #buildtheweb #programmerslife #fullstacklife #thedevlife #learning #girlswhocode #educateyourself #weprogrammers #worldcode
