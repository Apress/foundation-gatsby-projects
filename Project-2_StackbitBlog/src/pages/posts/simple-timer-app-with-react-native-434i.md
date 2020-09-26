---
title: Simple Timer app with React-Native
date: '2019-10-11T13:57:21.913Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--SbLKUCKc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--YUCMi-gu--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/2skz7k4khiky80kclev0.jpeg
comments_count: 1
positive_reactions_count: 47
tags: []
canonical_url: 'https://medium.com/@nabendu82/simple-timer-app-with-react-native-a32f835c1c71'
template: post
---
Continuing my React Native journey, i found a great site [https://learn.handlebarlabs.com/](https://learn.handlebarlabs.com/) by Spencer Carli. This post is based on one of the free course by him.

Let’s head over to a terminal and type expo init TimerReactNative

Press enter for blank in the selection.

![init](https://cdn-images-1.medium.com/max/2000/1*4EYs3K2ccFrjNgtdVq-dpg.png)*init*

In the next screen, you can give the same name as the project. For my case it is TimerReactNative.

![Timer](https://cdn-images-1.medium.com/max/2000/1*Dr1ehFDqegEzMl2GTQZ66A.png)*Timer*

Then change into the directory and do a npm start

![start](https://cdn-images-1.medium.com/max/2000/1*uDkWC0fcmizFQas8DTfFoA.png)*start*

The project will be started by expo on a web-browser.

![Web browser](https://cdn-images-1.medium.com/max/2880/1*hVs3Q1M5iE4wc12JzTJnfQ.png)*Web browser*

Next, open the project in VSCode and create a new folder App and a file index.js inside it.

![index.js](https://cdn-images-1.medium.com/max/2880/1*FdzbiH4aUgaAHKro_E_3dA.png)*index.js*

Copy all content from App.js to index.js and delete App.js

![updated index.js](https://cdn-images-1.medium.com/max/2880/1*Ew8zkEqc7lSYbfr8cial4w.png)*updated index.js*

Next, open the App on a physical device. I had mentioned the steps in my blog for [Restaurant Search app](https://dev.to/nabendu82/restaurant-search-app-with-react-native-using-zomato-api-5g5b).

You can also open the app in the lap by configuring Android emulator. I have mentioned the steps in my previous blog to [Setup Android Emulator on Mac](https://dev.to/nabendu82/android-emulator-setup-for-expo-on-mac-4n1j).

Next, we will change our index.js to display a button on the center of screen.

![index.js](https://cdn-images-1.medium.com/max/2880/1*HfWCbZH64utPM_phjCrGPA.png)*index.js*

It will show below in our App.

![Android App](https://cdn-images-1.medium.com/max/2160/1*r_EXxli_qpVeipzSWZzYRQ.png)*Android App*

Next, we will make the button round with center align text. In react-native, we have an element Dimensions by which we can use screen width as measurement.

![Dimensions](https://cdn-images-1.medium.com/max/2880/1*iY4KRywy2NQp9cC55eHUKw.png)*Dimensions*

By the above changes our button is perfectly round and text centered.

![Round button](https://cdn-images-1.medium.com/max/2160/1*7J2qssbdkpoZeOSS3lljcg.png)*Round button*

Next, we will add logic to display timer text above the button. Here, we are using useState hook to store a variable remainingSecs and also keeping a flag isActive.

We are using setInterval inside useEffect hook to update the value of remainingSecs every second and re-rended the component.

We are also using a getRemaining function to get minutes and seconds from a time passed.

![useState](https://cdn-images-1.medium.com/max/2880/1*LEDwfVD_qKkd4uRcXS6LHw.png)*useState*

We are then calling toggle function on pressing of the Start button. We are stopping the timer and also changing the text to Pause. Also giving some style to the text.

![toggle](https://cdn-images-1.medium.com/max/2880/1*j_UhDWgqKR79MOd5TkaZxA.png)*toggle*

With the above code, we were getting a wrong type of display. Our passed 5 was shown as 0:5. To show it as 00:05 , we will use another function formatNumber

![formatNumber](https://cdn-images-1.medium.com/max/2786/1*PI4MZsBcgXwz5h4BzHnHEw.png)*formatNumber*

Now, our App looks like below.

![TimerText](https://cdn-images-1.medium.com/max/2160/1*KbvZiVoVdoHnKU2CojZj0g.png)*TimerText*

Lastly, we will add a Reset button. We are also reusing the styles by using [] in style.

![Reset](https://cdn-images-1.medium.com/max/2880/1*K3q82_f9JADY9zXXB9vsuw.png)*Reset*

This completes our App and it looks like below.

![Final App](https://cdn-images-1.medium.com/max/2160/1*hipatSEOVR3VhbGG46-1OQ.png)*Final App*

Hope, you liked the app. You can find the code for the same in this github [link](https://github.com/nabendu82/TimerReactNative).


*[This post is also available on DEV.](https://dev.to/nabendu82/simple-timer-app-with-react-native-434i)*


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
