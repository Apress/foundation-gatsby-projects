---
title: >-
  Using react-adopt to solve “render props callback hell” in React NextJS
  GraphQL App
date: '2019-09-23T10:46:56.407Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--cxAgVclE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--1qTF1IPg--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/ye9kscntsowygwdec8cj.jpeg
comments_count: 0
positive_reactions_count: 8
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/using-react-adopt-to-solve-render-props-callback-hell-in-react-nextjs-graphql-app-429dd58366e5
template: post
---
I am building a demo Indian Restaurant Billing App , after completing [Advanced React](https://advancedreact.com/) course by Wes Bos.

In my first article i changed the menu to [hamburger menu](https://dev.to/nabendu82/creating-a-hamburger-menu-in-react-nextjs-app-1hpb) from the normal menu.
In the second article i had given details to upload images through [cloudinary](https://dev.to/nabendu82/cloudinary-for-image-management-in-react-nextjs-app-5f7).
In the third, we learnt to send transactional email using [gmail](https://dev.to/nabendu82/sending-transactional-emails-through-gmail-in-react-nextjs-graphql-app-1ap5).

In the app, we are using Apollo Client in the frontend, to get data from the Prisma database. So, we are using Mutation and Query components. In one of the component, we faced the deadly “Render prop callback hell”, with three level of callback.

You can find the starting code for **Bill.js** [here](https://github.com/nabendu82/BillingRestro/blob/c3728cbb0bfc5c0d8ab4e32e3c4eaab3df661d0b/frontend/components/Bill.js).

![The three level of render props](https://cdn-images-1.medium.com/max/2394/1*B2Lblttn9-rNymA98w5QuA.png)*The three level of render props*

Here **User** is a generic Query component.

![User component](https://cdn-images-1.medium.com/max/2066/1*g2XfC37R3-zYNfW-J0H52g.png)*User component*

To solve this problem, we use a third-party tool known as [react-adopt](https://github.com/pedronauck/react-adopt/blob/master/README.md).

So, let’s npm install **react-adopt** and use it in our component. Here, we will create a Composed component and use the adopt.

In it we write the three different keys in our Object and the value will be equal to the Mutation/Query we are going to replace.

![Composed](https://cdn-images-1.medium.com/max/2880/1*VIZrK1Piiphphcy1f_V58Q.png)*Composed*

We will now see the benefit of react-adopt. First we will replace the **User** component with the **Compose** component and also change the top level render prop to use all the keys from adopt.

![Replacing User component](https://cdn-images-1.medium.com/max/2606/1*7wywBejF0ejvMD4rgyde7g.png)*Replacing User component*

Now, time to delete the toggle cart Mutation. Go ahead and delete both starting and ending of it.

![Mutation deleted](https://cdn-images-1.medium.com/max/2636/1*oXMWoinfAZV4N9UuFzmNjg.png)*Mutation deleted*

Next, it’s time to delete the Query component.

![Query component deleted](https://cdn-images-1.medium.com/max/2788/1*8eB2sreLuMjM0l2DcMSkTg.png)*Query component deleted*

Now, if we go back to our frontend and check we will find everything works fine. But if we open the console, we will find three warnings.

![Warning spoiler](https://cdn-images-1.medium.com/max/2880/1*rZqSS9kE9OhdlRxNL3D_dg.png)*Warning spoiler*

To fix it we have to make child component in **Composed** component for every value.

![Our updated Composed](https://cdn-images-1.medium.com/max/2800/1*Ls9bKFd_MiGrpjg5-MnTmw.png)*Our updated Composed*

This will solve our warning problem and we get a minimal and readable code, with upper level render-prop.

You can find the updated code for **Bill.js** [here](https://github.com/nabendu82/BillingRestro/blob/45f7da36d592316bb7a499bbe3d8d926c905235e/frontend/components/Bill.js).


*[This post is also available on DEV.](https://dev.to/nabendu82/using-react-adopt-to-solve-render-props-callback-hell-in-react-nextjs-graphql-app-3odn)*


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
