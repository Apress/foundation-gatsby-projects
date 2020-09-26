---
title: Restaurant Search App with React Native using Zomato API
date: '2019-10-03T12:22:01.917Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--ZmLxxU_b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--2G86BgQG--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/o3aas41ek57psgax2apl.jpeg
comments_count: 0
positive_reactions_count: 79
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/restaurant-search-app-with-react-native-using-zomato-api-11faa7380b89
template: post
---
I had delayed learning React Native for some time now. After working with React for quite sometime, it is the obvious next step.

So, i headed over to Udemy and started the highly rated Stephen Grider [course](https://www.udemy.com/the-complete-react-native-and-redux-course/).

He created a restaurant app with Yelp API, but since yelp is not available in India i decided to go ahead with Zomato API. Zomato is a popular food delivery platform in India.

Our Restaurant Search app will have a Search Bar to search anything about food and then three categories of Restaurants — Cost Effective, Bit Pricer and Big Spender.

We will generate our React native project using expo-cli. So, head over to terminal and run the below command.

    npx expo-cli init restroSearch

It will show the below screen. Press enter.

![The screen](https://cdn-images-1.medium.com/max/2880/1*WzysRK68qfupP5e8uy9Y_Q.png)*The screen*

Then, we will be prompted to enter the name of the project. Type the same name restroSearch and press enter.

![Name](https://cdn-images-1.medium.com/max/2880/1*g2oXYz5TCpLFoo6PLDnHsg.png)*Name*

Once the installation is done, it will create a new folder restroSearch. Change to that and run npm start. It will open the [http://localhost:19002 /](http://localhost:19002/) in browser.

![localhost](https://cdn-images-1.medium.com/max/2874/1*dcZjwFwuj8zHKARbLNVdWg.png)*localhost*

Now, i am running the output on a physical Android device. For running on a physical device, you need to head over to Play Store and install Expo

Now, open the app on your phone. You will get the below screen.

![Expo App](https://cdn-images-1.medium.com/max/2160/1*CK0_MvKqD93eS1JDLXXWCw.png)*Expo App*

Click on Scan QR Code, it will open Camera. Point it to the QR code in the browser and you will the below screen, after all installation is done.

![Initial App](https://cdn-images-1.medium.com/max/2160/1*abfhYZmZsxXzdduKSNSn7w.png)*Initial App*

We will be using the StackNavigator in our project. So, go ahead and install these dependencies.

    npm install react-navigation

    npx expo-cli install react-native-gesture-handler react-native-reanimated

Open your project in Visual Studio Code and replace App.js content with below.

![New App](https://cdn-images-1.medium.com/max/2880/1*8UQXqAHuGfxqqDGJ0XE01A.png)*New App*

Now, create a file SearchScreen.js inside src -> screens. You need to create these two folders also.

![SearchScreen](https://cdn-images-1.medium.com/max/2880/1*ax2-rtO7gOAkJ6Kpn1en1g.png)*SearchScreen*

This will change our Application in our Android app and will show the SearchScreen component.

![SearchScreen](https://cdn-images-1.medium.com/max/2160/1*fgJq4cnB4OmJbySIVWMAgg.png)*SearchScreen*

Let’s create the SearchBar first. First create a components folder inside src. The create a file SearchBar.js inside it. Add the below content in it.

Here we are using View, TextInput, StyleSheet from react-native. We are also using an icon for Search from expo.

The styling in react native is mostly done through camelCase notation.

![SearchBar](https://cdn-images-1.medium.com/max/2880/1*2CDJufZkTuulkHVjgUuDdg.png)*SearchBar*

Now, our app will look like below.

![Restaurant Search](https://cdn-images-1.medium.com/max/2160/1*paY93YenHKC7KlILWGDkkQ.png)*Restaurant Search*

We will be passing a state from our parent component SearchScreen to SearchBar and will use callback to change it from SearchBar.

So, open SearchScreen.js and add a state and pass it to SearchBar.

![SearchScreen Changes](https://cdn-images-1.medium.com/max/2880/1*WTHPS8z-umjSp8Sovc5pMw.png)*SearchScreen Changes*

Now, we will use those in our SearchBar component.

![SearchBar Changes](https://cdn-images-1.medium.com/max/2880/1*r7Ae79hxb-tJa5tN3rCkVA.png)*SearchBar Changes*

Our search should start only when the user hit enter on the device. So, we will add the logic for the same next. Add a new callback in SearchScreen. We will later use it to call the zomato API.

![SearchScreen](https://cdn-images-1.medium.com/max/2880/1*sh-7ckqtHi6gyivsU6fhsQ.png)*SearchScreen*

Next, add the same in SearchBar component.

![SearchBar](https://cdn-images-1.medium.com/max/2880/1*rIeNcXi11bLpw9ZtZcV8-Q.png)*SearchBar*

Now, we can test it. Open you Android app and then type something on it and press the green enter key.

![Searching](https://cdn-images-1.medium.com/max/2160/1*6OurwqFLRJm-rCETmvK0ig.png)*Searching*

We can see the console log in our terminal after submitting.

![console log](https://cdn-images-1.medium.com/max/2880/1*jnK9uekTTQlX8x22k4GUAg.png)*console log*

Next, we will do the API call to get the list of restaurant and search anything. So, head over to [https://developers.zomato.com/api](https://developers.zomato.com/api) and get your API keys.

Zomato’s documentation is pretty good and contains swagger,so you can check the API there itself.

![Zomato swagger](https://cdn-images-1.medium.com/max/2880/1*xFVsm8ZKXhjQIgR3Zq4mPw.png)*Zomato swagger*

We will be using the Restaurant Search API mainly. I will be searching only the restaurants in Bangalore, so we will use the below GET api. We also need to pass our API keys in the header.

    https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&q=Kabab

Next, we will head over to terminal and install axios

    npm install axios

Next to use the zomato API, we will use the axios instance method. Create a folder api inside src and a file zomato.js inside it.

![zomato file](https://cdn-images-1.medium.com/max/2880/1*NkhMdVTEewgm9wGyWxusbw.png)*zomato file*

Next, we will be creating a reusable hook. Create a folder hooks inside src and a file useResults.js inside it. Here we are hitting the zomato url and setting the result in results.We are also using an initial search, so that when the app loads we get some data.

![hooks](https://cdn-images-1.medium.com/max/2880/1*duiMkshkFpIOWR8WAKuL3Q.png)*hooks*

Now, we will use these hooks inside our SearchScreen component.

![Using hooks](https://cdn-images-1.medium.com/max/2880/1*qL3wq8p7YMRUdQfAr3txNQ.png)*Using hooks*

Now, i our android app we get the result.

![API](https://cdn-images-1.medium.com/max/2160/1*0Vcj_EsilNE8tPLS2hIJXw.png)*API*

Next, we will create the component to show this result on screen. We will create a component ResultsList.js

![ResultsList](https://cdn-images-1.medium.com/max/2880/1*DJ4Yr6AU13JWRTnn4FNHAA.png)*ResultsList*

Next, we will pass the title from SearchScreen

![SearchScreen](https://cdn-images-1.medium.com/max/2880/1*kJwLRdOUvzBxjBDpkZa_KQ.png)*SearchScreen*

In our app, we are showing three different categories of restaurants by price. Now, zomato categories them by price_range value. We will filter the array and pass different price list to different ResultsList.

![Pricing](https://cdn-images-1.medium.com/max/2880/1*gdUebglRrqYbDvUMxKL8xA.png)*Pricing*

Next, let’s use this in the ResultsList component.

![ResultsList](https://cdn-images-1.medium.com/max/2880/1*VzAV-StNxK2yxVzbBAziQw.png)*ResultsList*

This will show the below in our App.

![The Result](https://cdn-images-1.medium.com/max/2160/1*HwdpqSqNORWz-q0XX0-87w.png)*The Result*

Now, let’s use the data an show it properly. We will use the FlatList to display the horizontal list, but use another component to show each item.

![FlatList](https://cdn-images-1.medium.com/max/2880/1*sBWEFEVf89zrYZjsmZIdSw.png)*FlatList*

Next, we will create the ResultsDetail component. It just take the item, which is pass and shows it with some styling.

![ResultsDetail](https://cdn-images-1.medium.com/max/2880/1*Z37yBLZusW4U96M590QcGw.png)*ResultsDetail*

It will show as the almost complete version of the App.

![The App](https://cdn-images-1.medium.com/max/2160/1*RXTLoHudtqiYlc_qvr2PcQ.png)*The App*

You might have noticed, we were not able to scroll vertically on an Android phone. So, to fix that issue we have to use ScrollView to wrap our list and also need to change the View to and empty div <>

![Scroll Issue](https://cdn-images-1.medium.com/max/2880/1*jAzlz70FmTdHF_3XbdOFzw.png)*Scroll Issue*

Now, we will add the logic to show more details of an individual restaurant, when the user clicks on it. For this we have to create a new Screen. Let’s first wire it up in App.js

![App](https://cdn-images-1.medium.com/max/2880/1*Dann57CQM40lnVbWDPAbqQ.png)*App*

Then we will add the Navigation logic to the ResultsList component. We are using withNavigation and passing the restaurant id to the ResultsShow component. With had wrapped the ResultsDetail with TouchableOpacity, so onPress we will be taken to the ResultsShow

![Navigation](https://cdn-images-1.medium.com/max/2878/1*qofeuhOHMrOKZCoHZZTO6Q.png)*Navigation*

Now, inside screens folder create ResultsShowScreen component. Here we are receiving the id from the parent component and using it to another api call to zomato api to get the restaurant details.

![ResultsShowScreen](https://cdn-images-1.medium.com/max/2880/1*Q1VY7elrEXW_3lmwziPhDw.png)*ResultsShowScreen*

Next, we will add some elements to show some details about the restaurant.

![Some elements](https://cdn-images-1.medium.com/max/2880/1*NKNIfforWb7ZqDwAIsa2jQ.png)*Some elements*

Next, we will add some styles for these elements.

![Some styles](https://cdn-images-1.medium.com/max/2786/1*S02imqEQvn2yGLzylXq4tw.png)*Some styles*

Now click on any restaurant and it will open the details of the restaurant.

![Restaurant details](https://cdn-images-1.medium.com/max/2160/1*WqVUKqa5WTm52GMU8f-hIg.png)*Restaurant details*

You can find the code for the same in github [here](https://github.com/nabendu82/NativeRestaurantSearc) and the apk file can be downloaded from [here](https://drive.google.com/open?id=113_1ZGrYBL-XCX93BvIZ3P0qy3Jx2txa).


*[This post is also available on DEV.](https://dev.to/nabendu82/restaurant-search-app-with-react-native-using-zomato-api-5g5b)*


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
