---
path: "/post-two"
date: "2019-02-26"
title: "Big O Part 2"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Big O continued… Today let’s talk about O(log N). It gets a bit ‘mathy’ but stick with me. I’ve seen many interviewers ask questions about this topic.
•
Let's start with an example - if you’re trying to find a word in a novel, you’ll iterate through the novel till you find the word. This operation will be O(N) where N means the number of words in the novel.
•
If you’re trying to find a word in a dictionary, instead of iterating through each word, you can use the divide and conquer method. This method can be used because you know that the words are in alphabetical order. The way this is done is when trying to find the word, you can split the dictionary in half and discard the half you don’t need, then go on splitting until you have the word we are looking for. If the word you are looking for is ‘Software’, then you would discard the first half of the dictionary which is A-M. You would then be left with N-Z. In the next step, you would discard T-Z and you would keep N-S and so on.This way we’re able to find the word we are looking for in far fewer operations compared to iterating through each word one by one.
•
This type of algorithm is called divide and conquer and works on the mathematical principle of logarithms. Since we’re splitting the dictionary in halves, we’re dealing with 2s which means our logarithm will be base 2. So this operation can be expressed like this: log 2(N), which means how many times do we have to multiply 2 to arrive at N (remember N here would be our data set so the number of words in the dictionary).
•
The important part here is the recognition that logarithms basically deal with splitting a given number into some type of base. Exact math doesn’t matter in Big O since we’re trying to figure out the trend over time so we don’t need the 2, that’s why the divide and conquer algorithm is a O(log N) operation.
•
Just remember, if you have an ordered list and need to search for something, you can use the divide and conquer method and that will be O(log N) which is better than O(N).
•
Let me know if you have any questions, this one can get a bit confusing!
