---
path: "/post-token-auth"
date: "2019-05-06T22:12:03.284Z"
title: "How Does Token Based Authentication Work?"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

JSON web tokens are text strings that can be used by a client and server to authenticate and share information easily. The main purpose of JWT is not to hide data, it is to help a server remember who somebody is and that the data was sent by an authentic source.

JWTs are stateless which means no user information needs to be stored on the server-side. The user information is stored in the JWT. The information embedded in a JWT will typically be: the user’s first and last name, user’s email address or username, user’s ID and user’s permissions.

The data inside a JWT is encoded and signed and can also be encrypted. The purpose of encoding in this case is to transform the data into text that is more easily transmitted across the wire. Signing allows the receiver to verify the authenticity of the source of the data. Encrypting changes the data so that only people that have access to a secret key can read it.

Some of the pros and cons of using a JSON Web Token are:
Pros:
</br>1️⃣Scalable - There is no need to store information on the server-side so it is easily scalable because the server does not have to look up user information every time it gets a request.
</br>2️⃣Extensible - A token can be sent to any domain. You can use the same token to make requests to different domains or downstream services.

Cons:
</br>1️⃣Security risk - If your token gets stolen, the attacker has full access to the user’s account. To prevent this, use HTTPS and set a short expiration for the token so that in case it gets compromised, it will be for a limited amount of time.
</br>2️⃣Large - The size of a JWT can get large depending on how much user information is stored in the token.

Thank you!

### #developer #frontenddeveloper #webdeveloper #webdevelopment #codingisfun #worldcode #programmerrepublic #code #programming #website #frontend #backend #codinglife #educateyourself #javascript #js #es6 #webapp #web #buildupdevs #sessionmanagement #cookies #authentication #cybersecurity #fullstackdeveloper #momscancode #computerscience #compsci #coder
