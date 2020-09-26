---
title: Simple iPhone Calculator App using hooks in React Native
date: '2019-10-15T02:28:35.724Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--sPpxG7v---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--vSvEcuUc--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/yveg162k9lf13bmx6gz7.jpeg
comments_count: 0
positive_reactions_count: 20
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/simple-iphone-calculator-app-using-hooks-in-react-native-aea15e43385
template: post
---
Continuing with React Native the next app i am making is a simple iPhone calculator. This post is inspired by [this](https://learn.handlebarlabs.com/courses/540767/lectures/9944110) video by Carl Spencer.

Let’s head over to a terminal and type expo init CalculatorReactNative

Press enter for blank in the selection.

![calc](https://cdn-images-1.medium.com/max/2000/1*JVGkMTgxCZ-h5mVvf_L7Dw.png)*calc*

In the next screen, you can give the same name as the project. For my case it is CalculatorReactNative.

![ReactNative](https://cdn-images-1.medium.com/max/2000/1*Rx4ZFm4pAt9LyUxhqLmmEA.png)*ReactNative*

Then change into the directory and do a npm start

![npm start](https://cdn-images-1.medium.com/max/2000/1*icmS7r8Y-2iOiFf2cHoFCQ.png)*npm start*

The project will be started by expo on a web-browser.

![expo](https://cdn-images-1.medium.com/max/2876/1*kb3gjaGHJybug34S8XRduw.png)*expo*

Next, open the project in VSCode and create a new folder App and a file index.js inside it. Copy all content from App.js to index.js and delete App.js

![index.js](https://cdn-images-1.medium.com/max/2880/1*bhmE9YmwiiErcQQgI_cf9A.png)*index.js*

Next, open the App on a physical device. I had mentioned the steps in my blog for [Restaurant Search app](https://medium.com/@nabendu82/restaurant-search-app-with-react-native-using-zomato-api-11faa7380b89).

You can also open the app in the lap by configuring Android emulator. I have mentioned the steps in my previous blog to [Setup Android Emulator on Mac](https://medium.com/@nabendu82/android-emulator-setup-for-expo-on-mac-3511d3ef67e5).

Let’s put some basic code to display a button and change the default styling. The StatusBar and SafeAreaView are to avoid the notch in iphone X and other Android models with notch for camera.

![index.js](https://cdn-images-1.medium.com/max/2880/1*78k3NjVAe37ZQee80N8uNQ.png)*index.js*

It will show as below on the physical android device.

![Physical](https://cdn-images-1.medium.com/max/2160/1*lZxRDM5-T0ZJW0gDTik1Kg.png)*Physical*

Next, create a folder components inside App and two files Row.js and Button.js inside it. In Row.js put the below, which will show any children passed to it.

![Row](https://cdn-images-1.medium.com/max/2880/1*uojXgIVzVBtQKMmmunOkGQ.png)*Row*

Next, let’s add some code in Button.js

![Button](https://cdn-images-1.medium.com/max/2880/1*anwibCKERN82hSUS3kS0YQ.png)*Button*

Next, head over to index.js and import these two by -

    import Row from './components/Row';
    import Button from './components/Button';

Next add the layout of calculator buttons in it. We have 5 rows here, each having 4 buttons. Only the last row have 3 buttons.

![Calculator Basic layout](https://cdn-images-1.medium.com/max/2876/1*gZ8X9jJziO4_oUCTkE4O-A.png)*Calculator Basic layout*

Next, we will add some styles to the button so that looks more like iphone calculator.

![iphone calculator](https://cdn-images-1.medium.com/max/2880/1*KKVtcw0nH4u0L1Eb3RdMyQ.png)*iphone calculator*

It will show rounded buttons like below now.

![Rounded Button](https://cdn-images-1.medium.com/max/2160/1*a3WOezvL6xEgu8YEDq4x_g.png)*Rounded Button*

Our last row have three buttons. In iPhone the 0 button takes half of the space and . and = takes the rest. We will fix the style for it next.

So, in button.js we will take an additional prop size. If it is equal to double, we are adding another style called buttonDouble to the button.

![double](https://cdn-images-1.medium.com/max/2880/1*0nEv9kFKNysuVov4PTPumQ.png)*double*

So, now move to index.js and add that prop to the Button 0 as below.

![size double](https://cdn-images-1.medium.com/max/2790/1*T1hDsvVnQxFp8-Sj_7CKQA.png)*size double*

It will now show our Button 0 taking double space.

![Button 0](https://cdn-images-1.medium.com/max/2160/1*In3k_U5DDlRitvvpwWoAZA.png)*Button 0*

Next, we will update colors of some of the buttons as in iPhone calculator. First let’s add a new prop for the buttons whose color will be updated in index.js

![theme](https://cdn-images-1.medium.com/max/2880/1*vu2AxRzlbLeo5iy8Vw2t-A.png)*theme*

Next, we will update it in our Button.js

First let’s add the code for theme. We are also going to update the color of our secondary buttons, so we are creating textStyles.

![theme](https://cdn-images-1.medium.com/max/2880/1*KCU01jW_fwfNScE_sLArsw.png)*theme*

Now, let’s add styles for the themes and text.

![colors](https://cdn-images-1.medium.com/max/2880/1*ZazqC4MUhUWOPPBFvOTKKw.png)*colors*

Now, our App styling is complete and it is looking like the iPhone calculator.

![iPhone Calculator](https://cdn-images-1.medium.com/max/2160/1*-nuvi_zt5ZbDxmUI30hjPg.png)*iPhone Calculator*

Now, we will write the logic for calculator. We are using React hook for state management. For details on hooks go through my earlier post on hooks [here](https://dev.to/nabendu82/understanding-react-hooks-by-building-a-simple-app-4i6d).

First let’s call a function handleTap() for all buttons. It passes different parameters depending on the button.

![handleTap](https://cdn-images-1.medium.com/max/2880/1*SjkSENdtiPdnxTQPy_d4CQ.png)*handleTap*

Next, we will use the useState hook. We will declare a variable currVal and update it with setCurrVal. So, whenever the type is number we are updating the currVal with whatever the user input.

![useState](https://cdn-images-1.medium.com/max/2880/1*9ef27NHgDC1RCEwm_PmvrA.png)*useState*

Next, we will add logic for operator, clear, posneg, percentage. We have declared two additional state variables operator and prevVal.

![operator](https://cdn-images-1.medium.com/max/2880/1*3TYAJNi74yH-2FJ-xLhuRw.png)*operator*

Next, we will add the logic for equal. It will do calculation depending on operator.

![equal](https://cdn-images-1.medium.com/max/2880/1*4SlruFezzPDux_DK6wz02g.png)*equal*

This completes our App. So, go ahead and play with it. You can find the code for the same in the link [here](https://github.com/nabendu82/CalculatorReactNative).


*[This post is also available on DEV.](https://dev.to/nabendu82/simple-iphone-calculator-app-using-hooks-in-react-native-1lgk)*


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
