---
title: YDKJS — Objects and Prototypes — Part2
date: '2019-08-13T16:36:09.172Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--SfOCS8je--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--drltv9hH--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/wz1rkh6mzgm9ii4vmkdd.jpeg
comments_count: 0
positive_reactions_count: 5
tags: []
canonical_url: 'https://medium.com/@nabendu82/ydkjs-objects-and-prototypes-part2-b284aecf198e'
template: post
---

Welcome to part-2 of the series. 

This series is all from the learnings of **Kyle Simpson** and also from the amazing youtube Javascript series by **Kaushik Kothagul** from [Javabrains](https://www.youtube.com/user/koushks/playlists?view=50&shelf_id=1&sort=dd), which is also influenced by **You don’t know JS**.

Let’s start from where to left in part-1. We saw three methods to execute a function. We will see what is the **this** variable in these three methods.

The variable **this** in the **Method# 1** is the window as shown in below example.

![this is window object](https://cdn-images-1.medium.com/max/2880/1*dC-G2ffKVbL0fmnctQcLcA.png)*this is window object*

The variable **this** in **Method# 2** is the Object itself as shown below.

![this is Object itself](https://cdn-images-1.medium.com/max/2876/1*nMhZgj-ooSdP4XuDEXwI7g.png)*this is Object itself*

The variable **this** in **Method# 3** is the empty Object, which is created by the JS engine when we use the **new** keyword.

![new is the empty Object](https://cdn-images-1.medium.com/max/2878/1*X9sP_8HfvPVwuNrMbpEPZA.png)*new is the empty Object*

Now, let’s see this below example to understand **Method# 4** of executing a function. We have a simple Constructor function **Bicycle**, which also have a property called **inflateTyre** which is a function. Next we have two variables bicycle1 and bicycle2, which are called with new keywords. They calls the **inflateTyre** function also and it updates the **tyrePressue** of respective variable. This is because the this is relates to **bicycle1** or **bicycle2**.

![Understanding Method # 4](https://cdn-images-1.medium.com/max/2880/1*XwK9i5Ci9CWZSjCpWrmxbQ.png)*Understanding Method # 4*

Now, let’s add a **Mechanic** mike. He should be able inflateTyre of any bicycle, as the self-inflating bicycles. Now, **Mechanic** have just one property of name. We have added mike to have bicycle1 inflateType property. 
But if we try to do **mike.inflateTyre()** it gives as **undefined** and when we see the mike variable again in console it shows the **tyrePressure** as **NaN**(not a number). This is because Mechanic doesn’t have a property called **inflateTyre** and when we do this.inflateTyre is called in line 5, it uses tyrePressure as undefined and 
`undefined + 3 is equal to NaN`
. And also the bicycle1, **tyrePressure** is not increased by 3.

![Understanding Method # 4](https://cdn-images-1.medium.com/max/2876/1*yfkKbXF984UEVuiQTjyr-A.png)*Understanding Method # 4*

Now, how do we solve this issue. This is where Method # 4 to call a function comes into picture. We have a property on every function, because as we know function is also object in JS. The property is called **call** and the main benefit of it is that we can call it with any object and then the this will refer to that object.
We call the inflateTyre with the bicycle1 and bicycle2 object respectively by mike.inflateTyre.call(bicycle1) and mike.inflateTyre.call(bicycle2). And we can see that mike is able to inflate tyre of any bicycle. 
*This happens because this inside Bicycle function is now the cycle respectively instead of the mike variable as earlier.*

![Finally the method # 4](https://cdn-images-1.medium.com/max/2880/1*WM9B7ebJWSCIzeJA8mZISg.png)*Finally the method # 4*

This concludes the part 2 of the series. 

*[This post is also available on DEV.](https://dev.to/nabendu82/ydkjs-objects-and-prototypes-part2-1k95)*


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
