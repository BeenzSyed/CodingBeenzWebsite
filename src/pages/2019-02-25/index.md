---
path: "/post-one"
date: "2019-02-25T22:12:03.284Z"
title: "Big O Part 1"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Let’s talk about Big O notation today. This subject is notoriously known to be confusing. I’m going to try and break it down to the main information that you need to know without making it too complex. This is going to cover 3 posts - today’s post will be an intro plus and explanation of O(1) and O(N).
•
Big O helps you understand how your code will perform when your data set gets large so basically how your code slows as your data grows.
•
If you have a chunk of code that takes a certain amount of time with a certain amount of data, how much longer would it take to work on 10x as much data? You might say it’ll take 10 times as long but that’s not necessarily true, depending on the code, some will take twice as long, some will take 100 times as long and some will stay the same.
•
Terminology that will be used:
O - means order of or growth rate,
N - means the amount of data,
so a particular piece of code will be represented as O(…N…)
•
Let’s talk about O(1), O(N) with a real world example:
Suppose you are counting beans in a jar. As the number of beans increases, so does the amount of time taken to count the beans. This operation would be considered to be O(N) which is a linear operation.
•
If the jars come labeled with the number of beans on them, the amount of time it’ll take for you to tell how many beans there are would stay the same so that operation would be O(1), it won’t matter if you have a jar with 100 beans or 1 million beans, all you need to do is read the label. (Shown in the picture).
•
That’s the basics for today. We’ll talk about O(log N) tomorrow!!
