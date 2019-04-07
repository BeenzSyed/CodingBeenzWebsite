---
path: "/post-three"
date: "2019-03-02"
title: "Big O Part 3"
author: "CodingBeenz"
featuredImage: "./featured-image.jpg"
---

Part 3 of the Big O notation! We'll review the ones we know - O(1), O(N) and O(log N) plus add some more.
•

1. O(1) - Random access to a given element in a collection is always O(1). Arrays allow you to access elements randomly if you know the index. Hashsets allow you to access if you know what the value is. Dictionaries allow you random access if you know what the key is. This means these operations stay constant no matter how big the data set gets.
   •
2. O(N) - List iterations - If you need to evaluate every item in a list, this means that it will at least be O(N).
   •
3. O(N^2) - Nested loops - Loops within loops are sometimes necessary but can generally be improved by thinking about data structures (I’ll talk about data structures in further posts).
   •
4. O(log N) - Divide and conquer - The act of dividing lists into smaller sublists is logarithmic. Doubling the size of the input data set has little effect on its growth as after a single iteration of the algorithm the data set will be halved and therefore on par with an input data set half the size. This makes algorithms like binary search extremely efficient when dealing with large data sets.
   •
5. O(N log N) - Iterations that use divide and conquer - Think about looping a list and then executing some algo like divide and conquer to search for a list value or run some kind of sorting.
   •
6. O(N!) - If you solve a problem by adding another nested loop for every input that you have, then you get O(N!), which is really bad and should be avoided.
   •
   Remember there is almost always a more efficient way to write code! Knowing and understanding Big O will help you write more performant software. Happy coding!!
   •
   Here are the references that I used to write these posts:
   The Imposter’s Handbook by Rob Conery
   http://bigocheatsheet.com/ (The image pictured is from here)
   https://www.youtube.com/watch?v=Ee0HzlnIYWQ
   https://medium.freecodecamp.org/all-you-need-to-know-about-big-o-notation-to-crack-your-next-coding-interview-9d575e7eec4
