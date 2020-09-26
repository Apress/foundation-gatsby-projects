---
title: YDKJS — Objects and Prototypes — Part3
date: '2019-08-13T16:38:56.878Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--f4PA2dxo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s---GEs6_qK--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/53j0ekxy56ywrld19a7c.jpeg
comments_count: 0
positive_reactions_count: 7
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-objects-and-prototypes-part3-c89383dd5d3f'
template: post
---

Welcome to part-3 of the series. 

This series is all from the learnings of **Kyle Simpson** and also from the amazing youtube Javascript series by **Kaushik Kothagul** from [Javabrains](https://www.youtube.com/user/koushks/playlists?view=50&shelf_id=1&sort=dd), which is also influenced by **You don’t know JS**.

Let’s start from where we left in the earlier part. Consider the below code of using constructor functions in JS. The problem in this is that, whenever we create a new variable with new keyword. The inflateTires function is created for each of them.

![The problem with new keyword in constructors](https://cdn-images-1.medium.com/max/3856/1*yoz1s0EjaSLowFa7i2xWmQ.png)*The problem with new keyword in constructors*

## Introduction to Prototype

In JavaScript as you know everything is a Object. So whenever we create an function, there is a one object which is created. but actually there is another object which is created which is known as the prototype object.

Consider the below example. In the below example **foo** have the property which is able to access the its prototype. The properties also known as prototype and it is written as **foo.prototype**

![The prototype example](https://cdn-images-1.medium.com/max/5760/1*FMsiZaew-yly1pC9dvMCqQ.png)*The prototype example*

Let consider the below sample to understand it more better. Whenever a function is created there are two object one is the function object another is the prototype object. Now to access the **Prototype** object we have a property on the function object also known as “**prototype**”.

![The prototype confusion](https://cdn-images-1.medium.com/max/3948/1*8eQqbmF4P3gPTixx4IUtXQ.png)*The prototype confusion*

When we call function **foo** with the **new keyword** interesting things happens. It create something known as **__proto__**. This is created by the JavaScript engine for every function call using the new keyword.

![calling foo with new keywords](https://cdn-images-1.medium.com/max/5760/1*foQUWCObJUGV7ylHiWC6mg.png)*calling foo with new keywords*

Let’s look in the below diagram, to find what is this weird looking **__proto__** property . Actually whenever we call a function with the new keyword a new object is created which have this **__proto__** property, and it points to the object of the function. If you call the function again with the new keyword it will again create a similar thing.

![The __proto__ property](https://cdn-images-1.medium.com/max/3864/1*YWY14ZxD7zNeVqg2YyK0vg.png)*The __proto__ property*

Let’s see an example to learn the things which you have seen in the diagram. We have created an Empty function **foo**. Then created a **newFooObj** using the **new** keyword on the function. Now using the property prototype created a test variable which contains some string. Now we can access the test variable using the **newFooObj** object **__proto__** property.

![foo.prototype === newFooObj.__proto__](https://cdn-images-1.medium.com/max/5760/1*NvT1T6AwdskCtL0w563UyQ.png)*foo.prototype === newFooObj.__proto__*

Now there is another benefit of the **__proto__** property. We are first checking whether our **newFooObj** have a **hello** variable. It doesn’t have one so we create one using the **__proto__** property. Now the **__proto__** property have a **hello** variable which is obvious. But we are also able to access it directly using **newFooObj.hello**. This happens because when the JavaScript compiler runs, and it first tries to find **hello** variable in **newFooObj**. If it is not able to find it checks the prototype object, where it is able to find it.

![The benefit of Prototype](https://cdn-images-1.medium.com/max/5760/1*E1wxy99icAJ4JHvXWB7cAA.png)*The benefit of Prototype*

This concludes the part 3 of the series.

*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-objects-and-prototypes-part3-4p4e)*


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
