---
title: Refactoring ReactJS youtube player to show selected video
date: '2019-07-20T09:53:08.250Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--YRCB_qca--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--kVpiGQ5a--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/3xri20dlpiwai6etk09j.jpeg
comments_count: 0
positive_reactions_count: 4
tags: []
canonical_url: >-
  https://nabendu.blog/posts/refactoring-reactjs-youtube-player-to-show-selected-video-43bk/
template: post
---

Many times in UI development we get request from client/user to highlighted item from a list once clicked upon. It can be a navbar, a list of videos or anything else.
Now we don’t just have to highlight an item, but also to unhighlight it if some other item is clicked.
Don’t confuse it with hover state, which can be easily done by CSS. But to do this is react is a task as we have to play with state, props, callbacks.

Let’s refactor the youtube player which we created in the the Youtube player with [react series](https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-1-3b949de9b251).
We will now clone the repo and do a npm install.

![Clone the repo](https://cdn-images-1.medium.com/max/2000/1*11TJmulqOYVMGUPu36Z1PQ.png)*Clone the repo*

Now let’s open the project in our code editor. While creating this app in earlier series i have explained how it works. 
For the highlighting thing to work, we have make changes in **video_list.js** and **video_list_item.js**
I have learnt the way to highlight from this [stackoverflow](https://stackoverflow.com/questions/34815382/react-unselect-from-list-while-selecting-another-item) post and since then applied to many of my work related projects.

Now the main logic is that, we have to manage the state from the parent(**video_list.js**) and if the state is true, we have to change the color of that item in children(**video_list_item.js**).
The children have the onClick event and tell the parent that it was clicked, so make it active.

Let’s code and it will be more clear. First we will make the changes in our parent(**video_list.js**).
It is currently like below. A function based component.

![current video_list.js](https://cdn-images-1.medium.com/max/2000/1*tRDu7ls5FCWj6wkSIe3CEQ.png)*current video_list.js*

We will change it to a class based component, as we need it to have state and also add a callback function to change the state.

![updated video_list.js](https://cdn-images-1.medium.com/max/2000/1*J4Gd9q-jHZ3GxtsVZkTqVg.png)*updated video_list.js*

The main changes are highlighted in yellow. We changed to class based component, added a state variable activeIndex. Also created a handleChange(), which will be changed via a callback function.

We are also passing three new props to our child component VideoListItem — One a callback , second the current index and third an active flag, which will be either true or false.

Let’s update the children(**video_list_item.js**) now and then we will go through the whole cycle once.

Our current **video_list_item.js** is as below.

![current **video_list_item.js**](https://cdn-images-1.medium.com/max/2000/1*eb2-1F4s4DPyZaXVn4Agzw.png)current **video_list_item.js**

We will change it to contain some inline styles and also handle the new props we created in **video_list.js**

![updated **video_list_item.js**](https://cdn-images-1.medium.com/max/2000/1*sWxi0HSC_ria2JXv1HbQPQ.png)*updated **video_list_item.js***

The changes are highlighted in yellow. First did some ES6 destructuring to take those props from **video_list.js **in variable.
Then created an object styles for inline style, which we will apply to the selected component.

In the li now we have a second **selectedByUser** callback attached to the onClick handler. It takes the current Index passed by parent component and pass it back once user clicks on it. We also have the styles attached here, which are shown if active flag is set as true.

Now, lets understand the complete cycle once. During the first render() in **video_list.js** we have the **active** as **null** because **activeIndex** was not changed and set to **let active = this.state.activeIndex;** Now the VideoListItem will have the active as false for all the video list item because **active={index === active}**. index will be from *0 to 4 while going through the map loop and active is null* , so *0 === null* and it will be **false**.

Now in **video_list_item.js** we initially have style as inactive because active props from parent is false for all five video items. Once a user clicks on one of them, we send the index back to the parent by the callback function 
`selectedByUser(currIndex)`
. Now this will trigger the 
`handleChange()`
 in 
`video_list.js`
 by 
`selectedByUser={selectedIndex => this.handleChange(selectedIndex)}`


The function changes the activeIndex to the selected index(say 4) by -

```
handleChange(sldIndex) {
this.setState({
activeIndex: sldIndex
});
}
```

Now, as we know if a state is changed in react it runs the render() again, which will trigger all children components also.

Now, this time active will be a number in below statement. Let say 4(assume the fifth video was clicked)
**let active = this.state.activeIndex;**//let active = 4

Now, we will go through our map five time. First 4 times(ie 0 to 3), we will have active as false

```
 active={index === active} 
// 0 === 4 no, so false
// 1 === 4 no, so false
// 2 === 4 no, so false
// 3 === 4 no, so false
> But, bingo the when we go through the map 5th time ie for 4
active={index === active} 
**// 4=== 4 yes, so true**
```


So, when these five videos goes to **video_list_item.js** , only one of them have *active set as true and other four as false.*

And this true one gets the style

```
isactive: {
border: ‘4px solid # 008dc8’,
background: ‘# eee’
}
```

because of -

`style={active ? styles.isactive : styles.inactive}`


And now we get this.

![The new highlighting app](https://cdn-images-1.medium.com/max/2868/1*1gBen6Fb223q2TkQefkzvA.png)*The new highlighting app*

You can find the repo [here.](https://github.com/nabendu82/youtube-player-selected)


*[This post is also available on DEV.](https://dev.to/nabendu82/refactoring-reactjs-youtube-player-to-show-selected-video-43bk)*


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
