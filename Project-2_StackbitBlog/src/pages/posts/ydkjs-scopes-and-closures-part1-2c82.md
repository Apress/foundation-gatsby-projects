---
title: YDKJS — Scopes and Closures — Part1
date: '2019-08-13T15:49:57.557Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--WgT0h_1x--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--fWYIFvkv--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/bci2gset996bq9kl4bca.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-scopes-and-closures-part1-9e19e5949a8a'
template: post
---

Every Javascript developer knows one thing that they don’t know enough Javascript. On the top level, it’s only var, for , if else just like any other Programming language, but if you want to dive deep and know how JS work. There is no better place then the legendary book series [You don’t know JS](https://www.amazon.in/You-Dont-Know-JS-Volumes/dp/9352136268?tag=googinhydr18418-21&source=ps-sl-shoppingads-lpcontext&tag=googinkenshoo-21&ascsubtag=4a820bb3-e3c5-4d47-ab00-16253c9fc78e) by **Kyle Simpson**. It is also available to read free on this [site](https://maximdenisov.gitbooks.io/you-don-t-know-js/content/).

This series is all from the learnings of **Kyle Simpson** and also from the amazing youtube Javascript series by **Kaushik Kothagul** from [Javabrains](https://www.youtube.com/user/koushks/playlists?view=50&shelf_id=1&sort=dd), which is also influenced by **You don’t know JS**.

Let’s start then with functions. As, it is said functions are first class citizens in javascript. They are actually objects in Javascript. There are basically two ways to create function in JS.

![Two ways to create function](https://cdn-images-1.medium.com/max/2874/1*RCQtK8xnkRMULlb8SMLS1A.png)*Two ways to create function*

Let’s now jump into the concept of scope. Whenever we declare a variable by say **var a = 10** , we are declaring it in global scope ie every part of our code can access it. We need them sometime but most time they create chaos.

So, we put the declaring in a scope and it’s only accessible within that scope. Treat scope as box and nothing can go outside it.

Consider the below figure.

![scope boxes](https://cdn-images-1.medium.com/max/2874/1*7bixL3P3env6w27i2xN7AA.png)*scope boxes*

Now the variable **a** is only accessible within it’s box. We can also have box within box. In the second example the inner scope/box have access to it’s variable **b** and also **c**. But the outer scope/box doesn’t have access to variable **b**.

Now how do we define these scope/boxes in Javascript. It’s a bit different then languages like C, C++, Java.

In these language an **if statement** creates a scope and the below will give undefined when we try to access variable **job**.

![if doesn’t creates scope](https://cdn-images-1.medium.com/max/2880/1*ZAUm5KeRcRjCyTZR-K_yUw.png)*if doesn’t creates scope*
> **Javascript is function scope and only way to create a scope in JS is by creating function.** It is not entirely true and their have been some new additions in language (in ES6) which creates scopes in different way. We will look into them later. But for most part you create scope using functions.

So, to create a scope in JS we put a variable inside a function.

![JS scope by function](https://cdn-images-1.medium.com/max/2876/1*2LyFMB7e5BJgynr8QtbctA.png)*JS scope by function*

Now let’s see how to have a function not pollute the global namespace. Consider the below example.

![global function](https://cdn-images-1.medium.com/max/2878/1*wQAsXYfVBfiFApgAUbWQUA.png)*global function*

Now, we created local variables a and b, but then created a global function **myFunc**. Sometime we don’t want this behaviour. So, in this case a **IIFE** *(Immediately invoked Function expression)* comes to the rescue. The above can be refactored as below.

![IIFE](https://cdn-images-1.medium.com/max/2872/1*nro7KcJY3zdgj8slXyubqg.png)*IIFE*

In this we create an anonymous function and immediately invoked it.



*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part1-2c82)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
