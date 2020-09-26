---
title: YDKJS — Objects and Prototypes — Part4
date: '2019-08-13T16:43:02.330Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--Mzs_Prk6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--6DaeZQjY--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/2tve5um7f21nninrmox7.jpeg
comments_count: 0
positive_reactions_count: 8
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-objects-and-prototypes-part4-eb2663989b'
template: post
---
Welcome to part-4 of the series.

This series is all from the learnings of **Kyle Simpson** and also from the amazing youtube Javascript series by **Kaushik Kothagul** from [Javabrains](https://www.youtube.com/user/koushks/playlists?view=50&shelf_id=1&sort=dd), which is also influenced by **You don’t know JS**.

By the end of the part 3 of the series, we found out how we can declare a variable on the prototype object. And then an access to the variable , through every object created using the new keyword.

Let’s see the real benefit of it in this example. We create an **Employee** constructor function. And then have two employees.

We want to have a common function **drinkCoffee**, which is accessible to all the employees. Now one way of doing it is to add it to the constructor function of **Employee**. But if we do so, every new employee will have a new copy of that drinkCoffee function. We don’t want that as it is a wastage of a resource. So the better way is to add the function drinkCoffee, to the prototype object so that every new employee created using the new keyword will have access to it. And we have just one copy of the **drinkCoffee** function.

![Real benefit of Prototype Object](https://cdn-images-1.medium.com/max/5760/1*n_wrxWNdIX1fidgS-tcKSw.png)*Real benefit of Prototype Object*

We will see one additional property. Let’s check the foo example again. We have a foo function which have a prototype object. Then we created an object a with the new keyword, so now it have a **__proto__** property which is the reference to the prototype object.
Now the prototype object has a property called **constructor** which points back to the function.

![The constructor property](https://cdn-images-1.medium.com/max/5760/1*bwLpoLebZ8yLnjQdcdqZfg.png)*The constructor property*

It can be better explained with the below diagram.

![The constructor diagram](https://cdn-images-1.medium.com/max/3864/1*m9VJPwz2O38kSEo1WQ6XwQ.png)*The constructor diagram*

## The Prototype Object

Now the prototype object also have a **__proto__** property, which points to a global object. Check the below diagram to understand more.

![The Prototype Object](https://cdn-images-1.medium.com/max/3840/1*N6cWaL7rjorZy0e15MKAow.png)*The Prototype Object*

We will understand the same using the employee example. We have an **Employee** function, which have an emp object created using the new keyword. I have a variable **prop** which is **“I am Employee”**. So we can access it by **emp.prop**.

Let have a variable on the employees prototype using 
`emp.__proto__.parentProp = “Parent of Employee”;`

And now we can access it by **emp.parentProp**, because the JavaScript compiler do chaining and find it in the employees prototype.

Now let have a variable **grandparentProp** on the Global object prototype, which have the value “Grandparent of Everyone”. Now the **emp** object can access it by **emp.grandparentProp**
> But it is actually grandparent of everyone, because any new object of other function as in the example foo also access to it. So this means we are having a global variable called grandparentProp, which is accessible everyone.

![The Grand Parent](https://cdn-images-1.medium.com/max/5760/1*KjhtQj1IXvqsdiBhOGVkQA.png)*The Grand Parent*

## Inheritance in Javascript

We will look into inheritance using the classical employee manager problem. Let have a constructor function **Employee**, which takes the name parameter. It’s prototype to have a that **getName** function, which returns the name.

Then we have a constructor function **Manager**, which takes name and dept parameter. The manager prototype have a **getDept** function which returns the department.

As seen below we cannot do a **mgr.getName()** , because manager don’t have access to the that **getName** function.

![The manager Problem.](https://cdn-images-1.medium.com/max/5760/1*kuePElL_OSCktvVbqjXryA.png)*The manager Problem.*
> Our current setup is like below. The Employee’s and Manager’s __proto__ both points to global Object’s Prototype.

![The current setup](https://cdn-images-1.medium.com/max/4496/1*eS6bY9VzvMebNm3Wg4Dm3A.png)*The current setup*

The manager problem of **getName** can be solved by placing the getname function on the Global object. But that is not the perfect solution, because then it will be accessible by all the other JavaScript functions in our scope.

We can solve this by having the Manager’s prototype pointing to the Employee’s prototype, which have the **getName** function.

![The Solution.](https://cdn-images-1.medium.com/max/4824/1*JxzS35_OSLbp5cTOAluoOQ.png)*The Solution.*

Let’s do it by changing the manager prototype, to point to the employee prototype.

![The Manager problem solved.](https://cdn-images-1.medium.com/max/5760/1*wajO2N7tVqhYpKI7xV59xA.png)*The Manager problem solved.*


*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-objects-and-prototypes-part4-2g5i)*


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
