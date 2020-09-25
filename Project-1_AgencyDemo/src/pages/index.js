import React, { Component } from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, SectionFour, FormFive, FlexBoxIndex, GenereicPara, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faHtml5, faJs, faReact, faCss3, faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby-link';

library.add(faHeart, faCode, faGem, fab, fas);

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 'form-name': form.getAttribute('name'), ...this.state })
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch(error => alert(error));


      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

      render() {
        const { name, email, message } = this.state;
          return (
            <Layout>
                <section style={{ position: 'relative' }}>
                    <Banner></Banner>
                    <TextWrapper>
                        <div>
                            <h2>GeekyHacker</h2>
                            <GenereicPara>One Stop For<br />
                                All your development<br />
                                And design needs</GenereicPara>
                            <Link to="/works">Our Work</Link>
                        </div>
                    </TextWrapper>
                    <MoreText>Learn More</MoreText>
                </section>
                <SectionTwo>
                    <div>
                        <GenericH2>Our Passion</GenericH2>
                        <GenereicPara lessSize grey>Most good programmers do programming not because they expect to get paid,<br />
                            but because it's fun to program.</GenereicPara>
                        <h5>- Linus Torvalds</h5>
                    </div>
                    <span>
                        <FontAwesomeIcon icon="gem" color="#04F5C6" size="6x" style={{marginRight: '3rem'}}
                            fixedWidth border
                        />
                        <FontAwesomeIcon icon="heart" color="#00F0FF" size="6x" style={{marginRight: '3rem'}}
                            fixedWidth border
                        />
                        <FontAwesomeIcon icon="code" color="#73DBFD" size="6x" fixedWidth border />
                    </span>
                </SectionTwo>
                <SectionThree>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="pic01.jpg" alt="pic01"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Website Development</GenericH2>
                            <GenereicPara lessSize lessSpacing>We hand code beautiful websites using HTML5, CSS3, JS because they are fully customizable and efficient. No Worpress websites here.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex inverse>
                        <div className="text__section3">
                            <GenericH2 none>Website Design</GenericH2>
                            <GenereicPara lessSize lessSpacing>We have talented and experienced Web Designers, who can design beautiful and usable websites.</GenereicPara>
                        </div>
                        <div className="image">
                            <img src="pic02.jpg" alt="pic02"/>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="pic03.jpg" alt="pic03"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Mobile App Development</GenericH2>
                            <GenereicPara lessSize lessSpacing>We develop Mobile apps in Reactive Native, which can be used in both ios and Android.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                </SectionThree>
                <SectionFour>
                    <div className="header__section4">
                        <div className="title__section4">Our Technologies</div>
                        <GenereicPara lessSize grey>We use modern and latest technologies which helps our clients<br />
                            as they are highly scalable and maintainable.
                        </GenereicPara>
                    </div>
                    <div className="grid__section4">
                        <div className="item1" style={{ backgroundColor: '#4D508E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faReact} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>React</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Modern JavaScript framework which will make your web application extremely fast and,
                                    at the same time, handy for every user.</GenereicPara>
                        </div>
                        <div className="item2" style={{ backgroundColor: '#4A4D89' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon="code" color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>React Native</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Cross-platform for mobile app development based on Javascript,
                                    whose resulting code is compiled to Android and iOS.</GenereicPara>
                        </div>
                        <div className="item3" style={{ backgroundColor: '#484A83' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faJs} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>JavaScript</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>JavaScript is the language of the web.
                                    It is used for Web development, mobile development and app development and everything else.</GenereicPara>
                        </div>
                        <div className="item4" style={{ backgroundColor: '#45477E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faHtml5} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>HTML5</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>HTML, a standardized system for tagging text files
                                    to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</GenereicPara>
                        </div>
                        <div className="item5" style={{ backgroundColor: '#424479' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faCss3} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>CSS3</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>CSS is a style sheet language used for describing the
                                    presentation of a document written in a markup language like HTML.</GenereicPara>
                        </div>
                        <div className="item6" style={{ backgroundColor: '#3F4174' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faGalacticSenate} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Gatsby</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Gatsby is a free and open source framework based on React
                                    that helps developers build blazing fast websites and apps</GenereicPara>
                        </div>
                    </div>
                </SectionFour>
                <section style={{ position: 'relative' }}>
                    <Banner parallax></Banner>
                    <FormFive>
                        <form name="contact"
                              method="post"
                              action="/thanks/"
                              data-netlify="true"
                              onSubmit={this.handleSubmit}>
                            <div className="fields">
                                <GenericH2 none>Contact Us</GenericH2>
                                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={this.handleChange} />
                                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                <textarea name="message" id="message" placeholder="Message" rows="7" value={message} onChange={this.handleChange}></textarea>
                                <div className="actions">
                                    <input type="submit" value="Send Message" className="button__primary" />
                                </div>
                            </div>
                        </form>
                    </FormFive>
                </section>
            </Layout>
        )
      }
}

export default IndexPage;
