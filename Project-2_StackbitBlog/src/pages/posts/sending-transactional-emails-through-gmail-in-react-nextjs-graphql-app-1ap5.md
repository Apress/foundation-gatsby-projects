---
title: Sending Transactional emails through gmail in React NextJS GraphQL App
date: '2019-09-23T10:42:31.448Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--Gi5va1D5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--mTjBT-Vx--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/76y73oqlezk97iwi88pi.jpeg
comments_count: 0
positive_reactions_count: 10
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/sending-transactional-emails-through-gmail-in-react-nextjs-graphql-app-50efe760574c
template: post
---
I am building a demo Indian Restaurant Billing App , after completing [Advanced React](https://advancedreact.com/) course by Wes Bos.

In my first article i changed the menu to [hamburger menu](https://dev.to/nabendu82/creating-a-hamburger-menu-in-react-nextjs-app-1hpb) from the normal menu.

In the second article i had given details to upload images through [cloudinary](https://dev.to/nabendu82/cloudinary-for-image-management-in-react-nextjs-app-5f7).

Now, in the course Wes had taught to send “Password Reset” transactional email through a fake SMTP service [Mailtrap](https://mailtrap.io/) and pointed us to use something more robust in production

Mailtrap is ok for development, where mails are not sent to recipient email. But even for a small production app, we need to send real emails to real email id.

I did my research to find a cheap and good email service to send transactional email, but all of them cost around $10 per month for the cheapest plan. Not all of us can start with that, even if our app is small. This is a good [link](https://quickemailverification.com/blog/top-transactional-email-services-compared/) if you want and of the services.

I did a bit more research and found that we can also send email through gmail APIs and found a great updated article on medium by [Nick Roach](https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1) to do so.

If your users have a gmail account(which most of us have) and you are ok with the limit of 500 mails per day, then ride along.

Follow the complete article by Nick Roach and get a **Client ID**, **Client Secret** and **Refresh Token** from Google Developer account.

Now, open your project which was made in after the Advanced React tutorial video 32 or open my [github](https://github.com/nabendu82/BillingRestro/tree/9b65463cc69d5c32e78cc2d06c9301c55f9613e2).

First, we make variables for Client ID, Client Secret and Refresh Token in **variables.env** file.

![New variables.](https://cdn-images-1.medium.com/max/2880/1*w_UfovvXKwEcerLeO6swDw.png)*New variables.*

In the file **mail.js** only keep the below.

![mail.js reduced](https://cdn-images-1.medium.com/max/2880/1*-LDdBUYJQHoVRujQDMkPJw.png)*mail.js reduced*

Now, in our **Mutation.js** import three new statements at the top and only take makeANiceEmail from mail.js

    const { makeANiceEmail } = require('../mail');
    const nodemailer = require('nodemailer');
    const { google } = require("googleapis");
    const OAuth2 = google.auth.OAuth2;

We do all the changes in **requestReset** function in **Mutation.js**

Here we are sending email through Oauth2 in gmail.

![Sending mail by Oauth2](https://cdn-images-1.medium.com/max/2880/1*rDv57ctUMvjaYgkz9-KYcA.png)*Sending mail by Oauth2*

We also have to install **googleapis** in our backend server, before running the code.

![googleapis](https://cdn-images-1.medium.com/max/2000/1*K30sw3Qq0cORfNWEaITZmA.png)*googleapis*

Now, it’s time to test. Sign up with a real gmail id in your web-app.

Then, go to the Reset page(I have a different one, then the tutorial app) and give the real gmail id, which you just used to Sign-up.

![Reset Link](https://cdn-images-1.medium.com/max/2880/1*FZNpinBD1aklJ2MkqzcKpQ.png)*Reset Link*

And here your password reset link on your real gmail account.

![Password reset gmail mail](https://cdn-images-1.medium.com/max/2000/1*9WIOdSgjGIzEVWkRrtTwrQ.png)*Password reset gmail mail*

You can find the code till this point [here](https://github.com/nabendu82/BillingRestro/tree/e126a6515cf05755d855b178301b7290159bae1e).


*[This post is also available on DEV.](https://dev.to/nabendu82/sending-transactional-emails-through-gmail-in-react-nextjs-graphql-app-1ap5)*


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
