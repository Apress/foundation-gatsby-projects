---
title: YDKJS — Scopes and Closures — Part2
date: '2019-08-13T15:57:04.610Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--PhHsNmv5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--l7GEmEhv--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/ksgckbs0imh6zovtgk1j.jpeg
comments_count: 0
positive_reactions_count: 3
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-scopes-and-closures-part2-9cc9a7510731'
template: post
---
Welcome to the Part2 of YDKJS series. As told in part1 this series is based on my learnings from legendary book series You don’t know JS by Kyle Simpson and Javascript series by Kaushik Kothagul from Javabrains.

Before understanding scope in details we have to understand two concept. Every operation in JS is either **Read operation** or **Write Operation**.

Consider the below statement -
> **var a = 10;**

Now this is a **write operation** because we write 10 to variable a.

Now, consider the below statement.
> **console.log(a);**

This is a **read operation** because we read the value of variable a.

Let consider another example.
> **var a =10;
var b;
b=a;**

Now in this the line **b=a** is interesting, because for **a** it’s a **read operation** and for **b** it’s a **write operation**.

Let consider another example to make the concept even more clear.

![read write example](https://cdn-images-1.medium.com/max/2000/1*8yASTrrEqtBGzSxMh0rzKQ.png)*read write example*

Now at line 4, there is a **write operation** because when *greet(“Nabendu”)* is called from line 8, we have **function greet(name=”Nabendu”)** here. So, assigning name variable the value “Nabendu”.
And at line 5 the usual read operation as we are reading the value of a.

Let’s move to one more important concept related to read and write operations.
> **If we use a variable without declaring it. It is ok to do a write operation, but not ok to do a read operation.**

Let’s see example to be more clear.

![read operation](https://cdn-images-1.medium.com/max/2000/1*kCB2_JSF7HIU7LkaeTTplA.png)*read operation*

*In the above we tried to do a read operation on a variable foo, without even declaring it and the compiler throws an error.*

Now consider below.

![write opertion](https://cdn-images-1.medium.com/max/2000/1*obZP4yRXpeaJOcLS6g32dg.png)*write opertion*

*We do a write operation in line 1 ie foo=10. Here also we are not declaring foo. Now this is perfectly right and the compiler doesn’t throws an error.*

Window object is the object in which all global variables are created as properties.

Let’s define these below two variables in firefox scratchpad and then do reload and run.

![firefox scratchpad](https://cdn-images-1.medium.com/max/2000/1*9ym49IdPdDPHTwVQ-RGssQ.png)*firefox scratchpad*

In the firefox console write window and we can see the Window object containing these two variables.

![Window object](https://cdn-images-1.medium.com/max/2406/1*7qiCr3aKFTMx5ksA_tMvGA.png)*Window object*

Also, can access these two variables as window object’s properties.

![window object properties](https://cdn-images-1.medium.com/max/2076/1*OM_kylDGOK4OS5XuuWIqzg.png)*window object properties*




*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part2-9ej)*


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
