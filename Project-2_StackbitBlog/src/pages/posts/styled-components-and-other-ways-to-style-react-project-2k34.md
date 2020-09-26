---
title: Styled Components and other ways to style React Project
date: '2019-08-02T03:10:48.693Z'
excerpt: ''
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--hT24DVO6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--F5MK1aMD--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/1qwh2rwbx870d0hos4qd.jpeg
comments_count: 0
positive_reactions_count: 5
tags: []
canonical_url: >-
  https://medium.com/@nabendu82/styled-components-and-other-ways-to-style-react-project-2db256ae4e6d
template: post
---
I generally use styled components, most of the new CSS which I do at work. One of the main benefit of styled components in any react project, can be truly understood when the projects that bigger.

The CSS in large Complex projects which uses a normal CSS or scss, gets complicated very soon. The new developers who come to the project, find it really difficult do a small CSS change also. Because that is small CSS change breaks a lot of things.

Beside this just styled component fits into the react ecosystem which creates component. We will soon see the power of props in the example which were going to create.

Now there are two other popular ways, to do CSS in a react project.

### 1. CSS Stylesheet

First is the usual CSS style sheet. We can use like below in a normal component. We have a normal functional component called **SolidBox**.

```
    import React from 'react';
    import './SolidBox.css';
    
    const SolidBox = () => (
      <div className="SolidBox">
        <p className="SolidBox_content">Get started with CSS styling</p>
      </div>
    );
    
    export default SolidBox;
```

We then import a CSS file called SolidBox.css and use it like, we do in normal HTML, CSS setup.

```
    .SolidBox {
      margin: 40px;
      border: 5px solid black;
    }
    
    .SolidBox_content {
      font-size: 15px;
      text-align: center;
    }
```

But I generally use it in the root **index.js** file, of a react project like below.

```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Routes from './routes';
    import store from './store';
    import { Provider } from 'react-redux';
    import './index.css';
    
    ReactDOM.render(
        <Provider store={ store }>
            <Routes />
        </Provider>,
      document.getElementById('root')
    );
```

And the **index.css** , the route colour HTML and body css like below.

```
    :root {
      --yellow: # ffc600;
      --black: # 272727;
    }
    
    html {
      box-sizing: border-box;
      font-family: "Gloria Hallelujah", cursive, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-weight: 900;
      font-size: 10px;
      color: var(--black);
      text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
    }
    
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    
    body {
      background:# 018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
      background-size:cover;
      min-height: calc(100vh - 100px);
      background-attachment: fixed;
      letter-spacing: -1px;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 5px 0;
    }
```

### 2. Inline styling

The second way is the inline styling. But it is different than the normal HTML inline styling. One of the main thing to notice is that every key of the CSS property is written in **camelCase**. And also **quotes** are necessary to specify the value. So **font-size** become **fontSize** and **15px** becomes **‘15px’**.

And whatever HTML element we use them, have to specify with style equal to like *style={ renderButtonDisabled }*

I mainly use them for some small style fix, which only used in that component. Example of button like below.

```
    const renderButton = {
        backgroundColor: '# f5f5f5',
        color: 'black',
        border: '2px solid # f5f5f5',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '1.6rem',
        fontWeight: '600',
        height: '40px',
        minWidth: '200px',
        padding: '0 24px',
        transition: 'box-shadow .3s',
        fontFamily: 'inherit',
        marginLeft: '4px'
    }

    ....

    <input type="button" **style={renderButton}** onClick={ this.handleFormSubmit } value="Submit" />
```

There is another way to use them, and I use them for really small CSS change, like centring text as below.

```
    <div style={{ textAlign: 'center' }}>
      I am a centered text.                       
    </div>
```

### 3. Styled-components

The Third way is to use a library like styled-components, which is one type of CSS-in-JS library. But it is the most popular one , hand should be used for any modern react project. Especially the one which I started from scratch.

You have to do npm install to use it details of which are given in this [link](https://www.styled-components.com/docs/basics# installation).

Let’s look at the below real example, which I have created for solving a coding challenge problem. In it **PageWrapper, HeaderTitle, FlexResult, FlexBoxRev** are all **styled-components**. We are defining them in a different file called **StyledComponents.js**. This file contains all the styled-components but we are importing only the components which we need.

```
    import React, { Component } from 'react';
    import { connect } from 'react-redux';
   import { PageWrapper, HeaderTitle, FlexResult, FlexBoxRev } from '../../molecules/StyledComponents';

    class ResultPage extends Component {
        render() {
            return (
                <PageWrapper wider>
                    <FlexResult>
                        <FlexBoxRev toCenter noRightMargin>
                            <HeaderTitle toWhite>Success! Congratulations on finding Falcone.</HeaderTitle>
                            <HeaderTitle small topMargin>Time Taken: {this.props.timeData}</HeaderTitle>
                        </FlexBoxRev>
                    </FlexResult>
                </PageWrapper>
            );
        }
    
    }

    const mapStateToProps = ({ dataReducer }) => ({
        findData: dataReducer.findData,
        timeData: dataReducer.timeData
    });
    
    export default connect(mapStateToProps, null)(ResultPage);
```

The **StyledComponents.js **file which contains all our styled components.

```
    import styled from 'styled-components';
    
    const PageWrapper = styled.div`

      max-width: ${ props => (props.wider ? '96%' : '85%') };
      margin: 1% auto;
    
`;
    
    const GridHome = styled.div`

      display: grid;
      grid-template-rows: 80px 200px 80px;
      grid-row-gap: 10px;
      align-items: center;
    
`;
    
    
    const HeaderWrapper = styled.div`

        background: var(--yellow);
        height: 5%;
        padding: 1%;
    
`;
    
    
    const FlexResult = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    
`;
    
    const FlexBoxRev = styled.div`

        display: flex;
        flex-direction: column;
        margin-right: ${ props => (props.noRightMargin ? '' : '8%') };
        align-items: ${ props => (props.toCenter ? 'center' : 'flex-start') };
        justify-content: center;
    
`;
    
    
    
    const FlexBoxNav = styled.div`

      display: flex;
      align-items: center;
      justify-content: ${ props => (props.toBtw ? 'space-between' : 'space-around') };  
    
`;
    
    const HeaderTitle = styled.div`

        font-size: ${ props => (props.small ? '18px' : '25px') };
        margin-top: ${ props => (props.topMargin ? '5%' : '') };
        text-align: ${ props => (props.toCenter ? 'center' : '') };
        font-weight: bold;
        line-height: 1.25;
        color: ${ props => (props.toWhite ? '# f5f5f5' : '# 333333') };
    
`;

 export { PageWrapper, GridHome, FlexBoxNav, HeaderTitle, HeaderWrapper, FlexBoxRev, FlexRevRadio, FlexResult };
```

One of the main thing to notice that we are using something called props. Because of props we can reuse the styled-components. Let’s take the example of PageWrapper. We can use it as 
`<PageWrapper>…</PageWrapper>`
 which will set the *max-width to 85%*. 
And if like **<PageWrapper *wider*>..</PageWrapper> **, it will set *max-width to 96%*

```
    const PageWrapper = styled.div`

      max-width: ${ props => (props.wider ? '96%' : '85%') };
      margin: 1% auto;
    
`;
```

The other thing to notice is that, we can use more than one props by 
`<HeaderTitle small topMargin>Time Taken: {this.props.timeData}</HeaderTitle>`


```
    const HeaderTitle = styled.div`

        font-size: ${ props => (props.small ? '18px' : '25px') };
        margin-top: ${ props => (props.topMargin ? '5%' : '') };
        text-align: ${ props => (props.toCenter ? 'center' : '') };
        font-weight: bold;
        line-height: 1.25;
        color: ${ props => (props.toWhite ? '# f5f5f5' : '# 333333') };
    
`;
```

Hope you liked the article. You can find the complete project in my github repo [link](https://github.com/nabendu82/geekSolution). 
See you soon :)


*[This post is also available on DEV.](https://dev.to/nabendu82/styled-components-and-other-ways-to-style-react-project-2k34)*


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
