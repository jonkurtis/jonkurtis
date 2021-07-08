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
let books = [
  {
    title: 'Harry Potter and the Philosopher's Stone',
    pages: 223,
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    pages: 251,
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pages: 317,
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    pages: 636,
  },
  {
    title: 'Harry Potter and the Order of the Pheonix',
    pages: 766,
  },  {
    title: 'Harry Potter and the Half Blood Prince',
    pages: 607,
  },  {
    title: 'Harry Potter and the Deathly Hallows',
    pages: 607,
  },
]
```

## How To Use The Map Method

The `.map()` method returns a new array after looping through the initial array and performing a function on each item in the array.

```
let houses = wizards.map((wizard)=> {
  return wizard.house;
});

console.log(houses)
//result: ['Gryffindor', Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw']
```

## How To Use The Reduce Method

```
wizards.reduce((wizard)=> {

});
```

## How To Use The Filter Method

```
let filterdWizards = wizards.filter((wizard)=> {
  wizard.house === 'Slytherin';
});

console.log(filteredWizards);

//result: [{name: 'Tom Riddle', house: 'Slytherin'}]
```

## Conclusion
