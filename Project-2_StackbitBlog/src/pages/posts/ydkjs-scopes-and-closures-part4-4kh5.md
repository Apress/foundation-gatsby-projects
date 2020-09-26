---
title: YDKJS — Scopes and Closures — Part4
date: '2019-08-13T16:06:28.056Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--7vsyeW2v--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--HAMnRE_K--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/eygngg4p8jzec3wvb7y2.jpeg
comments_count: 0
positive_reactions_count: 4
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-scopes-and-closures-part4-6ca178fbd1ab'
template: post
---
Welcome to the Part4 of YDKJS series. As told in part1 this series is based on my learnings from legendary book series You don’t know JS by Kyle Simpson and Javascript series by Kaushik Kothagul from Javabrains.

We will go through some more examples of compiler interpretor runs first.
Let’s see the first example.

![First example](https://cdn-images-1.medium.com/max/2000/1*m5Umf9iDpgmP_0f-nOwZnA.png)*First example*

Now the compiler step should be obvious by now. It finds the variable declaration and function declaration and put them to the scope in which they comes. 
Now when the interpretor runs it’s goes to line 1 and find a from the compiler at global scope and assign value 10 to it. Then it finds the next execution at line 14 and finds the function outer at global scope from the compiler.
Now it goes inside the function outer and checks b. Finds b at outer scope and assign it to value of a which it’s gets from the global scope from the compiler. The next line 5 prints the value of ***b ie 10***.

Next the interpretor executes line 11 and finds it at the outer scope from the compiler. Then it goes inside it and at line 7 ask the compiler it have a variable called b and yes it have it, so assign the value 20 to b. Then it finds c also in inner scope and in line 9 prints the value of ***c as 20***.
So, when we execute it, the below is printed.

![10 and 20 printed](https://cdn-images-1.medium.com/max/2332/1*fgl93Au7tunhZgOk8sh3Kg.png)*10 and 20 printed*

Now, you might be thinking it is quite obvious for 10 and 20 to get print, so why go through the compiler and interpretor step. Let’s change the above example a bit and then we will see hat get’s print on the console.

![Changed line 7](https://cdn-images-1.medium.com/max/2000/1*VeCoFu4yQQQu6HXs0N3F9A.png)*Changed line 7*

Now, when we go through the compiler step, it is similar to the earlier example even for b in inner scope. There is a b in the inner scope as their is a var found by the complier.

Now when the interpretor comes to line 7, it’s ask compiler whether it have a variable c in inner scope and it get’s it. Next it ask the compiler where it have a variable b in inner scope and compiler says yes. Next the interpretor goes to line 8 and console the value of c, which will be **undefined** as it didn’t got the value of b yet.

![necessary of compiler and interpretor step](https://cdn-images-1.medium.com/max/2450/1*JKFH4FgLziNYE-KK_QEMzg.png)*necessary of compiler and interpretor step*

So, that’s why it is sometime necessary to go through the compiler and the interpretor step once.

The above can be also shown by a simple example. We might think that the below will give an reference error at Line 1, because we are doing an read operation on an undeclared variable.
But it gives undefined, because a compilation step happens before it and the interpretor when executed will give undefined.

![a is undefined](https://cdn-images-1.medium.com/max/2456/1*xS5LAE3_6fOzZy9mhNNOmw.png)*a is undefined*

This concept is only known as Hoisting in Javascript.

Hosting means when the compiler runs and finds all the var declaration, it sorts of move them to the top of the file.

Lets consider this simple example. Here we are doing operations on a , b and c without declaring them first. They are declared on line 5, 6, 7 and yet the interpretor doesn’t throws a runtime error. It is because it doesn’t matter where the variables are declared. They are always hoisted to the top by when the compiler makes the first pass.

![hoisting example](https://cdn-images-1.medium.com/max/2568/1*8Nw773ohzFJO3ZvG4k380g.png)*hoisting example*

This is also true for function declaration, as from our earlier knowledge we know that the compiler also treats function declaration as variable declaration as in JS all function declaration are object declaration.

![Function declarations](https://cdn-images-1.medium.com/max/2568/1*CBp9tG4c7gk3krjI4WygCg.png)*Function declarations*

But the same is not true about function expressions. Let’s see the below example.

![Gives runtime error](https://cdn-images-1.medium.com/max/2000/1*RZZZsbgwQZ6Fm0BR19QPxQ.png)*Gives runtime error*

Here when the compiler runs it registers a variable myFunc at line 3, but it doesn’t knows what it is. So, when the interpretor runs at line 1, it throws a runtime error, because it doesn’t know what is myFunc.

So, function expressions can only be run if we call it after defining it, so that we have both the compiler and the interpretor step competed.

![Function expressions way to run](https://cdn-images-1.medium.com/max/2564/1*hcNYNccTb-DZOduBC-LdJA.png)*Function expressions way to run*

Some of the javascript crazy behaviour like we can assign value to undeclared variable are not desired by many developers. We can restrict the same using strict mode introduced in Ecma Script 5.

Consider the below example, in which we declare a variable **myName**. And somewhere down our program we spell it wrong as **myname** and assign a value. So, what JS does is create a new variable **myname** and assign Nabendu o it. Clearly, not what we desire.

![Not desirable feature](https://cdn-images-1.medium.com/max/2570/1*MdmkgBNLh5PpsmXBK3LVKQ.png)*Not desirable feature*

So, we use the strict mode by writing “use strict” at the top of the program. And now if we run the program, it will give a run time error.

![using strict mode](https://cdn-images-1.medium.com/max/2000/1*64TdGcR78xSaIK20S0rlDg.png)*using strict mode*



*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-scopes-and-closures-part4-4kh5)*


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
