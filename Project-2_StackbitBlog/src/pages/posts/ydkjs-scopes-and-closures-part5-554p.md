---
title: YDKJS — Scopes and Closures — Part5
date: '2019-08-13T16:26:42.052Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--u22HgRKW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--hFDmftaH--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/afw8cc34813dn8mvpxgq.jpeg
comments_count: 0
positive_reactions_count: 6
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-scopes-and-closures-part5-7d9b87ef5706'
template: post
---

Welcome to the Part5 of YDKJS series. As told in part1 this series is based on my learnings from legendary book series You don’t know JS by Kyle Simpson and Javascript series by Kaushik Kothagal from Javabrains.

We will start one of the most complex topic of Javascript here ie **Closures**. But one think to know is that *Closures are everywhere in JS*.

Let consider a simple example without closure, which we will refactor to use closure later.

![Simple inner outer example](https://cdn-images-1.medium.com/max/2568/1*9aROQb1AXISx_xeCieUymg.png)*Simple inner outer example*

The above is a simple example of an inner() inside an outer(). The inner() is both declared and executed from inside the outer function.

Now, since in JS functions are first class citizen. We can have the function inner executed from anywhere else also. We will refactor the above to do so using function expressions.

![Refactoring inner outer example](https://cdn-images-1.medium.com/max/2574/1*YcxoQRikzlCKI2_eJBr6Bw.png)*Refactoring inner outer example*

So, we changed inner to a function expression and returned it. So, when we call outer, we can save the return value to a variable **innerFn**.

Let’s understand one thing. The variable b have an scope in outer function ie from line 4 to line 10. So, at line 13 when we call the outer function, it can access the value of b, but at line 14 there is no outer function.

So, how does the innerFn() access the value of b. This is where the JS feature of Closures comes into play. When the var inner is created at line 6, the JS engine not only stores the function object information but also it’s scope information. So, it stores a scope of variable a and b inside the inner function object.
Now it doesn’t matter where you call inner, whether in this file or some third party file. It will always remember the value of a and b, as if a snapshot is been taken.

It is to be noticed that the snapshot is a pointer to these variables and not a copy. So, if you change variable a and b here, it will be changed in function inner.

One thing to also know is if we call outer 2 times then how many copies of a and b gets created.

![Copies of a and b](https://cdn-images-1.medium.com/max/2870/1*WyfSnx57dF48YvB9s762IA.png)*Copies of a and b*

As seen above to added line in inner to increment **a** and **b** variables. Now since a is global variable it’s value is 11 first time and 12 the second time then innerFn2 is called.

But b have an snapshot in the inner function, so each new call through a new innerFn will start b at 20 and print it as 21 because of the increment.

Let’s now see a practical example of closure. Javascript is single threaded, so if we want our problem to wait we use the setTimeout function provided by JS.

![closures in action](https://cdn-images-1.medium.com/max/2880/1*vSimsmfOrzmt2LK_NKHbUA.png)*closures in action*

Here the setTimeout at line 7, is calling a function fn. This fn is a function expression console log the variable a. Now when this fn is created it gets the snapshot of var a and even if the setTimeout is called from another file which have no concept of var a, this variable gets prints after a delay of 6 seconds.

Now, let’s consider another practical use of closures. We have the concept of getters and setter in OO languages like Java. By this we hide the variables from outside world in a function/class and make them private. They can only be access via getter methods and set via setter methods.

Will try to create them in Javascript. Consider our first try below.

![First try for getters](https://cdn-images-1.medium.com/max/2878/1*N7jutkyH_2OUBNNGLDhPeQ.png)*First try for getters*

Here we created a person object and have two properties of **firstName** and **lastName** holding the value. And then two getters **getFirstName** and **getLastname** to get those values. 
As we can see in the console, we are able to do a **person.getFirstName()** but we are also able to do a 
`person.firstName`
 
 We should not be able to do this, but we don’t have a concept of private variables in Javascript like in Java.

So, we will refactor our code to use the concept of closures to achieve the same. Consider the below code.

![getters in Javascript](https://cdn-images-1.medium.com/max/2874/1*gtLOjEHiHphYLaFF0Vqw4g.png)*getters in Javascript*

We first put the object in a function **createPerson**. Then we move the var **firstName** and **lastName** outside the object. We have the usual **getFirstName** and **getLastname** inside the object. We then return the object.

Now at line 16, we call the function and then assign the return value ie the object in a variable person. 
The person variable can access the **getFirstName** but not the **firstName**. It is because **firstName** scope is from line 2 to line 13 and not accessible outside it.

But the **person.getFirstName()** is a closure executed. When the **getFirstName** was created at line 6, it got the snapshot of the variable **firstName** because of the concept of closure. This is how **person.getFirstName( )** is able to access the value of **firstName.**

This concludes our You Don’t know JS — Scopes and Closures series. Will see you soon in the Object and Prototype series.


*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part5-554p)*


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
