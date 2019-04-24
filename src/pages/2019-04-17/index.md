---
path: "/post-injection-attacks"
date: "2019-04-17T22:12:03.284Z"
title: "Injection Attacks"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Todays topic: What are Injection Attacks?

An injection attack allows an attacker to inject code into a program that gives the attacker the ability to execute remote commands through which they can read or modify data.

Injection attacks are the most common types of attacks and are known to lead to the most financial loss. If you add security for this in your app, consider that you’ve covered a big security issue. Anytime that a user has to input information on your web app, an injection attack can be made.

There are 3 main ways to add security in your application to deal with injection attacks.
</br>1️⃣Sanitize Input - Any input that a user can enter on your web app, validate it. Ensure that if you are expecting text that the input is only text. For example, with a phone number make sure that it’s only numbers that are 10 digits. If it’s not the proper type, discard it. Sanitizing is either performed by using a white list or a black list.
</br>2️⃣Parameterize Queries - aka prepared statements. This is a way to prevent SQL injections. We create a function where you can clean up the input coming into a query from the user.
</br>3️⃣Use Knex.js or other ORMs (Object Relational Mappers) - they provide prepared SQL statements for you to use, all you need to do is supply the parameters and it’ll take care of checking the inputs. An example of an ORM is Knex.js.

Happy Wednesday!!!

### #programmer #development #instatech #peoplewhocode #coderlife #girlswhocode #womeninstem #webdevelopement #buildupdevs #webdev #backend #frontend #securitytesting #fullstack #devlife #geek #learntocode #softwareengineering #computerscience #javascript #worldcode #womenintech #engineering #cybersecurity #web
