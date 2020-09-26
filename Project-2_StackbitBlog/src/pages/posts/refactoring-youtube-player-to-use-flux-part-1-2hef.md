---
title: Refactoring Youtube Player to use Flux — Part 1
date: '2019-07-18T03:26:36.431Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--4lyyYEcI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--iZrQkVk4--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/ijcmf8syd8fadlld0xcq.jpg
comments_count: 0
positive_reactions_count: 5
tags: []
canonical_url: 'https://nabendu.blog/posts/refactoring-youtube-player-to-use-flux-part-1-2hef/'
template: post
---
I have written a three part series to create a youtube player. It used only React and heavily depends on callbacks from children to parent and in one case two level deep. 
We can solve this issue using three solutions — Flux, Redux , Context API. We will look into solving this with Flux in this tutorial.

We will first look briefly into what is Flux. Flux also follows the unidirectional flow of react, but it’s a closed circle. It have four parts — ***The React components, Actions, dispatcher and Store***

**React Component**
It either creates an action or listen for a change in store or do both.

**Actions**
Do some action when triggered from component and pass it to dispatcher

**Dispatcher**
Just a middleman, sends actions to all stores

**Store**
Manages the logic and emits the changes, to be picked up by components.

We only need three components in this Flux refactoring. The basic flow will be as below. We will understand it more, once we build it.

![Flux flow for Youtube Player](https://cdn-images-1.medium.com/max/2000/1*NZFTOoH7vNK6FGn4BH2wLw.png)*Flux flow for Youtube Player*

Now, i will be first cloning from the create [youtube player repo](https://github.com/nabendu82/youtube-player).

![Clone exiting callback youtube-player code](https://cdn-images-1.medium.com/max/2000/1*JGMoPbUaEyrp1v_ULV6YaA.png)*Clone exiting callback youtube-player code*

After that change to that directory and do a **npm install.**Once the npm install finishes successfully do a **npm start**

![cd to directory and npm install, then npm start](https://cdn-images-1.medium.com/max/2000/1*RCJjkeQAGqufRil2rbDSUg.png)*cd to directory and npm install, then npm start*

In Flux and other central state logic implementations, we move much of the logic out of React. It only remains as a View, which it is meant to be.

Let install flux into our project by **npm install — save flux**

![npm install — save flux](https://cdn-images-1.medium.com/max/2000/1*CJ5t5H2GWs63h2X598xX5g.png)*npm install — save flux*

Now one of the main part of our youtube-player logic is to go the Async API call to youtube through **youtube-search-api**. We will move this logic out to our **App.js** to **action** file. We will first see the basic unidirectional flow of Flux by showing a initial search of ‘React Tutorials’. 
From the constructor, we the call to the action file function **videoSearch**(). We will create that next.

![New App.js](https://cdn-images-1.medium.com/max/2000/1*nrXX3UrjzlcIkJGbT-bW6g.png)*New App.js*

Now create an **actions** folder in src directory and a file **ytSearch_actions.js** inside it. This action file is doing the Async YTSearch now, with searchTearm(*‘React Tutorials’ from App.js*). It is receiving an array of object from youtube as a response. 
Then sending the same to **dispatcher** as an object with an identifier in actionType and the received data in payload.

![**ytSearch_actions.js**](https://cdn-images-1.medium.com/max/2000/1*pPYsygHMEo3GtW6H4CkDrg.png)***ytSearch_actions.js***

Also, create a **constants** folder and an **index.js** file inside it. It is used here in **actions**(*ActionTypes.FETCH_YTSEARCH*) and also will be used in **store**. Basically used to keep the constants maintainable.

![constant file](https://cdn-images-1.medium.com/max/2000/1*msAYa0-mSnia8eNneZxwlA.png)*constant file*

Now create a **dispatcher** folder and an **index.js** file inside it. It is just a simple file, with functionality written internally. It basically takes everything from the actions and passes it to all stores.

![dispatcher](https://cdn-images-1.medium.com/max/2000/1*k4QuCHYOYGe_Cp-WzlNJGg.png)*dispatcher*

Now create a folder **stores** and a file **ytSearch_store.js** inside it. It contains the major functionality in a flux application. Here we are first importing an **emitter**. In the constructor, we first registering with the dispatcher as it’s gets it data from dispatcher. 
The dispatcher register calls the function **_registerToActions()**. Inside it we have a switch statement, that checks the action type. Right now we have one only, in future we will have more. Here it agains uses the constant from the constant file.
It calls the function **addNewSearchItem(action.payload)**. Notice the **action.payload** is nothing but the **data** from **ytSearch_actions.js** file. So, it’s the array of object, we received from youtube.
We then call the function **_addNewSearchItem()**, where we assign this array of object to a local array and EMITs it.
The **getAllVIdeos**() returns the state of this local array, which we will use later in receiving component. The next two functions **addChangeListener**() and **removeChangeListener**() will also be used in our receiving component.

![**ytSearch_store.js**](https://cdn-images-1.medium.com/max/2000/1*b0t2wtc1eXksLLJ5W8IJPw.png)***ytSearch_store.js***

Now, we will update our receiving component **video_list_item.js** .Note, in this refactored flux youtube player, we don’t need the file *video_list.js*
Here we are first importing the store. Creating a state object with items as key which calls **YTSearchStore.getAllVIdeos()** and gets the array of object.
In constructor, a **_onChange()** function is also call. It sets the state variable once it receives the *array of object*. This keeps on changing, once we do the search.
There is react lifecycle hook **componentWillMount()** and **componentWillUnmount()**, which are used to **addChangeListener()** and **removeChangeListener()** from dispatcher.
In **render**() method, we display the url and the title in a list through using map and iterating over.

![updated **video_list_item.js**](https://cdn-images-1.medium.com/max/2000/1*imD8UQPHIXO60UEKVn1BeQ.png)*updated **video_list_item.js***

Our **array of object**, which we receive from youtube.

![array of object](https://cdn-images-1.medium.com/max/2000/1*9dM8C4p_6NqVxiAo1OXdhw.png)*array of object*

Our list of videos from youtube is showing perfectly and this concludes Part 1. Check Part 2 [here](https://medium.com/@nabendu82/refactoring-youtube-player-to-use-flux-part-2-b40799141659).

![list of videos from youtube](https://cdn-images-1.medium.com/max/2000/1*v0pX4_vjp90vmS3eBhPIUQ.png)*list of videos from youtube*


*[This post is also available on DEV.](https://dev.to/nabendu82/refactoring-youtube-player-to-use-flux-part-1-2hef)*


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
