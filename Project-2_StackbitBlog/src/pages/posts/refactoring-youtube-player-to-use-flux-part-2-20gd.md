---
title: Refactoring Youtube Player to use Flux — Part 2
date: '2019-07-19T03:07:11.765Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--7wd3PM8M--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--IDPGdJ6O--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/d5c3gks6ple9lmcgsvms.jpg
comments_count: 0
positive_reactions_count: 3
tags: []
canonical_url: 'https://nabendu.blog/posts/refactoring-youtube-player-to-use-flux-part-2-20gd/'
template: post
---



Welcome to Part 2 of the Flux series. 
Now we will add the SearchBar functionality. It is pretty much straight forward. First update the App.js to include SearchBar as below.

![Update App.js](https://cdn-images-1.medium.com/max/2000/1*AdNGHZfHkL2gZ9Wp-oKpfQ.png)*Update App.js*

Now, update the **search_bar.js** . It’s only a minor update and we have added the **YTSearchAction**() in our **onInputChange**() and passing the **event.target.value**

![Update search_bar.js](https://cdn-images-1.medium.com/max/2000/1*r841x6YpQ-D5Hb2-3UfVTQ.png)*Update search_bar.js*

No, other thing needs to be changed and our change is already reflected as the **ytSearch_actions.js** will take the new **searchTerm** and do the **youtube-api-search.** It gets passed to the **ytSearch_store.js** and then to **video_list_item.js** to be displayed.
Notice, earlier we were triggering the action from **App.js** with a string ‘React tutorial’. Following exactly the same process here with **search_bar.js**

![Updated site with Search capabilities](https://cdn-images-1.medium.com/max/2530/1*0j7WsqElVddibJS0VDSPqQ.png)*Updated site with Search capabilities*

Now, we will show the youtube player by working on **video_detail.js** . First let add the component to **App.js**

![Adding VideoDetail](https://cdn-images-1.medium.com/max/2000/1*pnwoeHNKdGHLjc7GUi0t1w.png)*Adding VideoDetail*

We will then add a function **getFirstVIdeo**() in **ytSearch_store.js** to return the first video instead of the whole array of object. We are doing this because when the apps load for the first time and the initial youtube search on “React Tutorials” is triggered, we want to display the first video instead of blank.

![**getFirstVIdeo()**](https://cdn-images-1.medium.com/max/2000/1*ppga6vJBqoRid23B6debAQ.png)***getFirstVIdeo()***

Now, we will update the **video_detail.js**. You will see the pattern is almost similar to **video_list_item.js** , where also we register to the store and have these react lifecycle methods.

![updated video_detail.js](https://cdn-images-1.medium.com/max/2000/1*gzCDavZ1W1J47zwFflVw8Q.png)*updated video_detail.js*

Here in the constructor, we have a state object item. We initialise it with **YTSearchStore.getFirstVIdeos()**. But this will receive a **undefined**, because the **youtube-search-api** takes 1–2 sec to get the videos and React renders this component by this time. Try commenting out below -
> if (!this.state.item) {
 return <li className=”media-right”>Loading…</li>;
}

And you will get the classic react **undefined** error -

![undefined error](https://cdn-images-1.medium.com/max/2246/1*Bw-y6wU6rs8PNy0KagQnyQ.png)*undefined error*

Rest flow is similar to **video_list_item.js** and we will get this output in our page.

![Updated App](https://cdn-images-1.medium.com/max/2852/1*iHpO0djMHfRkIZpRGtShhA.png)*Updated App*

This concluded Part 2 of the series. We will complete this app in Part 3 and add the select functionality to select a video, by clicking on right side list.


*[This post is also available on DEV.](https://dev.to/nabendu82/refactoring-youtube-player-to-use-flux-part-2-20gd)*


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
