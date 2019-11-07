---
templateKey: blog-post
title: "Use Cool \U0001F60E Map, Reduce and Filter Methods on Array of Objects in JavaScript."
date: 2019-06-30T20:35:42.990Z
slug: how-to-use-map-reduce-filter-on-array-of-objects-js
image: /img/android-chrome-512x512.png
description: >-
  Modern JavaScript array methods provide a better developer experience than for
  loops and forEach loops. Learn how to use Map, Reduce and Filter Array Methods
  with useful examples.
tags:
  - JavaScript
  - Tutorials
  - Array Methods
  - Vanilla JS
---
Modern ES5 JavaScript array methods provide a better developer experience than `for loops` and `forEach` loops. Learn to use `.map()`, `.reduce()` and `.filter()` Array Methods with useful examples.



We will use the following array of objects for our examples:

```
let wands = [
  {
    master: 'Harry Potter',
    core: 'Phoenix Feather',
    length: 11,
  },
  {
    master: 'Tom Riddle',
    core: 'Phoenix Feather',
    length: 13.5,
  },
  {
    master: 'Albus Dumbledore',
    core: 'Thestral Tail Hair',
    length: 15,
  },

]
```

## How To Use The Map Method

The `.map()` method returns a new array after looping through the initial array and performing a function on each item in the array.

```
let masters = wands.map((wand)=> {
  return wand.master;
});

console.log(masters)
//result: ['Harry Potter', 'Tom Riddle', 'Albus Dumbledore']
```

## How To Use The Reduce Method


```
wands.reduce((wand)=> {

});
```

## How To Use The Filter Method

```
let filterdWands = wands.filter((wand)=> {
  wand.core === 'Phoenix Core';
});

console.log(filteredWands);

```

## Conclusion
