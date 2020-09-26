---
title: YDKJS — Objects and Prototypes — Part1
date: '2019-08-13T16:31:51.291Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--RFNX42ux--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--uBfC1M7q--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0vnij2peyj02cmel3fxu.jpeg
comments_count: 0
positive_reactions_count: 5
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-objects-and-prototypes-part1-9e64655fdd42'
template: post
---
Welcome to the second series of You don’t know JS. Part one of the series was regarding Scopes and Closures.

This series is all from the learnings of **Kyle Simpson** and also from the amazing youtube Javascript series by **Kaushik Kothagul** from [Javabrains](https://www.youtube.com/user/koushks/playlists?view=50&shelf_id=1&sort=dd), which is also influenced by **You don’t know JS**.

Let’s start with creating a simple function using object to create employee objects.

    function createEmpObj(fName, lName, gender, desig) {
      var newObj = {};
      newObj.firstName = fName;
      newObj.lastName = lName;
      newObj.gender = gender;
      newObj.designation = desig;
      return newObj;  
    }

    var emp1 = createEmpObj("Parag", "Khandar", "M", "Project Manager");
> Now consider the line **var newObj = {};** and **return newObj;** They will be same in every function which we create. So, JS gave us a special type of function known as **Constructor function** to create them.

We will refactor the above to use **Constructor function**. Look at the below code.

    function createEmpObj(fName, lName, gender, desig) {
      //var this;
      this.firstName = fName;
      this.lastName = lName;
      this.gender = gender;
      this.designation = desig;
      //return this;  
    }

    var emp2 = new createEmpObj("Shikha", "Biswas", "F", "Developer");

We are adding the keyword **new** to create the object. It basically takes care of the creation and returning of the newObj. But gives this a new name **this**.
Note, that we don’t need to put those two line in our code and automatically put by JS engine.

Let’s go through the four different ways to execute functions in Javascript.

    function foo() {
      console.log("Hello");
    }

    foo();  //Method # 1

    var obj = {};

    obj.foo = function() {
      console.log("Hello");
    }

    obj.foo() //Method # 2

    new foo() //Method # 3

The Method# 1 is the obvious way to execute a function. 
In Method# 2 , we have an object and that object have a property of foo. The property foo have a value as anonymous function. So, obj.foo() can be used to call the function.
The Method # 3, we have just seen and is called Construction function and adds the this, when call with new keyword.

We will go through the Method# 4 in the next part. 

*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-objects-and-prototypes-part1-1jml)*


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
