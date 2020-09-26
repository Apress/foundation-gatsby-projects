---
title: Refactoring Youtube Player to use Flux — Part 3
date: '2019-07-19T03:14:49.101Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--wRgZDsT_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--3Q0N5nKj--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/bbtwzwnxhmfd7htdgmz4.jpg
comments_count: 0
positive_reactions_count: 4
tags: []
canonical_url: 'https://nabendu.blog/posts/refactoring-youtube-player-to-use-flux-part-3-3dnf/'
template: post
---

Welcome to Part 3 and here we will add the functionality to click on a video, in the list to select it and display it in player.

Now the flow will be — 
* We will have a click handler in **video_list_item.js** on each video.
* Which will fire a new action in **yTSearch_action.js**
* Through the dispatcher, this video will be passed to **ytSearch_store.js**. It will emit the video then.
* Then **video_detail.js** will receive this specific video and show it in player.

Let’s now start with **video_list_item.js** and add the **onClick**() handler. Here we have imported the YTSearchAction first and then in **li** (which will hold a single video in list), added an onClick() handler which will fire an action in actions file. The line **key={video.etag}**, is to identify this video uniquely as **etag** for each video from youtube is unique. It is required to do in React when handling arrays, or else it throws a big red warning.

![**video_list_item.js**](https://cdn-images-1.medium.com/max/2000/1*pHcWA8dm0uC9KnwsPZGvAA.png)***video_list_item.js***

Next we will add this **userSelected()** in **yTSearch_action.js**. This is quite straightforward and similar to videoSearch(), just that we are not doing any API calls and passing a single **video object**.

![userSelected() in **yTSearch_action.js**](https://cdn-images-1.medium.com/max/2000/1*cK9KQUV2UuVjBtfg-9aVVQ.png)

Now to handle this action, we will add code in **ytSearch_store.js**. Basically, we are having this new empty array **_userSelected** and assigning it to the video we received from **yTSearch_action.js** in **action.payload** and then emitting it.

![**ytSearch_store.js**](https://cdn-images-1.medium.com/max/2000/1*Z3jCNcnXSOBTAMnwnrpDOQ.png)

Now, let’s move to the receiving end and it is the **video_detail.js**. We will receive this video there and show it in the video player.

![**video_detail.js**](https://cdn-images-1.medium.com/max/2000/1*uLILPzA5xQwRlABjQiVvTw.png)***video_detail.js***

The highlighted parts are the new addition. We are basically checking whether the video is received through clicking of a video or through the initial render/search in bar.

![Final web-app](https://miro.medium.com/max/700/1*vxde-44hdy2lFMO0a5Dnug.png)*Final web-app*

This concludes our series. Hope you enjoyed it. The github repo is [here](https://github.com/nabendu82/youtube-player-flux).


*[This post is also available on DEV.](https://dev.to/nabendu82/refactoring-youtube-player-to-use-flux-part-3-3dnf)*


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
