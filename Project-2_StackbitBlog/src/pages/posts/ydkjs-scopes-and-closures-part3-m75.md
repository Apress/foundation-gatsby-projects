---
title: YDKJS — Scopes and Closures — Part3
date: '2019-08-13T16:02:43.412Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--elxlKYEl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--_Su3NcJC--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/vq272xpiz76stjxolz5c.jpeg
comments_count: 0
positive_reactions_count: 4
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-scopes-and-closures-part3-91ce50ded6bb'
template: post
---
Welcome to part3 of the series.

The traditional languages like Java and C++ are compiled languages, means you have to make an intermediate executable from your source code. In java you make a “jar file” and in C++ you make an “out file”.

In javascript you directly execute your source code. A webpage will directly execute your javascript. So, for that reason many people think Javascript as a interpreted language.
> However their is a compilation step just before the interpretation step in Javascript. So, JS is both interpreted and compiled language.

Compilation step — During this step the compiler mainly registers the variable declarations.

Let consider the below example. The compilation steps mainly looks at the **var** keyword. It is not bothered with what is assigned in these variables.

![compilation step](https://cdn-images-1.medium.com/max/2000/1*n4-LEsPyECkvMvbD9YVZSg.png)*compilation step*

When the compiler goes to line 1, it encounters var a and registers it in the global scope and then goes to line 3 and registers the var b. Line 5 is only a console and it doesn’t finds any var, so don’t do anything.

Let consider another example. Here the compiler finds 4 variable declarations.

![Another compilation step example](https://cdn-images-1.medium.com/max/2000/1*O6QFpOP01s4z0FytiLpAGA.png)*Another compilation step example*

It is obvious that var a, b and c are variable declaration. But **myFunc** at line 3 is also a variable declaration because functions in JS are actually object declarations.

Let do another one. In this variable declaration at line 1 and line 3 in global scope are obvious. But there is another variable declaration at line 3 for **name=myName**, which is in greet scope.

![Yet another compilation step example](https://cdn-images-1.medium.com/max/2000/1*SBcxHtjvYxbHJb6AQipCAw.png)*Yet another compilation step example*

Interpretation step- This step is followed by the compilation step and in it the actual execution takes place.

Let consider the above example only. Once the compilation step is complete, the interpretation steps starts.

Now the interpretor starts at **line 1** and see a variable **myName** and ask the compiler, if it have a variable myName in Global scope and the compiler have it. So, it assigns the value **Nabendu** to it.

At line 3 no assignment/execution needs to be done, so it goes to line 7 and here there is **function greet** which it finds from the compiler at the Global scope. Even the **myName** variable inside it is in Global scope.

Now with this the line 3 is executed and here it finds another variable **name**. The variable name it finds from the compiler from the greet scope.

Now once the interpretor goes inside the function and at line 4, it finds **console**. It first looks for *console* at *greet scope* and then at *global scope* from the compiler but don’t find it. So, it checks in the Javascript global and finds it. Inside the console there is name, which it finds at greet scope.

Let consider an example how the interpretor can lead to creation of global variable.

![interpretor problem](https://cdn-images-1.medium.com/max/2000/1*s7RrEoCCDr2Od7x_BX8o4w.png)*interpretor problem*

Here the compiler have a successful run but when the interpretor comes to line 6, it checks the value of c first at the myFn scope and then at the global scope. But it cannot find it so it throws a runtime error.

Let change the line 6 to a write operation and see what happen. As we know write operations on undeclared variables don’t throws an error and the interpretor creates it.

![interpretor global problem](https://cdn-images-1.medium.com/max/2000/1*YQgINh2mTqj7MMGSSTEJtA.png)*interpretor global problem*

Now in above the compiler ignore line 6 as there is no variable declaration with var. So, when the interpretor comes to line 6 and ask the compiler for variable c, it doesn’t gets it in myFn or the global scope.
Since, write operations don’t throw an error in JS. The interpretor creates the same in the global scope.



*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part3-m75)*


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
