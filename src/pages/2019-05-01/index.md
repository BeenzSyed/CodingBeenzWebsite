---
path: "/post-cookie-auth"
date: "2019-05-01T22:12:03.284Z"
title: "How Does Cookie Based Authentication Work?"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Cookie-based authentication is stateful. This means that an authentication record or session must be kept both on server and client-side.

The server will keep track of active sessions in a database. On the client-side, a cookie is created that will hold the session ID.

Flow of events:
</br>1️⃣The user enters login credentials
</br>2️⃣The server verifies the credentials are correct and creates a session which is then stored in a database
</br>3️⃣A cookie with the session ID is placed in the user’s browser
</br>4️⃣On subsequent requests, the session ID is sent with the request and the server verifies it against the database and if valid, the request proceeds
</br>5️⃣Once a user logs out of the app, the session ID is destroyed on both the server and the client.

Thank you!

### #developer #frontenddeveloper #webdeveloper #webdevelopment #codingisfun #worldcode #programmerrepublic #code #programming #website #frontend #backend #codinglife #educateyourself #javascript #js #es6 #webapp #web #buildupdevs #sessionmanagement #cookies #authentication #cybersecurity #fullstackdeveloper #momscancode #computerscience #compsci #coder
