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
let wizards = [
  {
    name: 'Harry Potter',
    house: 'Gryffindor',
  },
  {
    name: 'Tom Riddle',
    house: 'Slytherin',
  },
  {
    name: 'Albus Dumbledore',
    house: 'Gryffindor',
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
  },
  {
    name: 'Cho Chang',
    house: 'Ravenclaw',
  },
]
```

## How To Use The Map Method

The `.map()` method returns a new array after looping through the initial array and performing a function on each item in the array.

```
let Gryffindors = wizards.map((wizard)=> {
  return wizard.house;
});

console.log(Gryffindors)
//result: ['Harry Potter', 'Albus Dumbledore']
```

## How To Use The Reduce Method


```
wizards.reduce((wizard)=> {

});
```

## How To Use The Filter Method

```
let filterdWizards = wands.filter((wand)=> {
  wand.core === 'Phoenix Core';
});

console.log(filteredWizards);

```

## Conclusion
