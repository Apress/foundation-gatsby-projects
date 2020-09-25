import React from "react";
import { Works, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout";
import Project from "../components/Project";

const projects = [
    {image: "printbill.png", title: "PrintBill", link: "https://www.printbill.in/"},
    {image: "sprung.png", title: "Sprung", link: "https://sprung.us"},
    {image: "orange.png", title: "Orange Health", link: "https://whispering-bastion-31600.herokuapp.com/"},
    {image: "billing.png", title: "Billing Restro", link: "https://billingrestro-react-prod.herokuapp.com/"},
    {image: "ferrarisports.png", title: "Ferrari Sports", link: "http://ferrarisports.com/"},
    {image: "pregnancy.png", title: "Pregnancy info", link: "http://pregnancy.info/"},
    {image: "jaagastudy.png", title: "Jaaga Study", link: "https://nabendu82.github.io/incognosco/index.html"},
    {image: "responsive1.png", title: "Responsive Site- POC", link: "https://shikhacorps.in/corps/"},
    {image: "responsive2.png", title: "Responsive Site2- POC", link: "https://shikhacorps.in/cssgridresponsive/"},
    {image: "styleconferences.png", title: "Style Conferences", link: "https://nabendu82.github.io/shayhowe/index.html"},
    {image: "itunes.png", title: "iTunes Clone - POC", link: "https://shikhacorps.in/mytunes/"},
    {image: "parallax.png", title: "Parallax Site - POC", link: "https://shikhacorps.in/parallaxsite/"},
    {image: "photography.png", title: "PhotoGraphy Site-POC", link: "https://shikhacorps.in/photographysite/"},
    {image: "yelpcamp.png", title: "YelpCamp", link: "https://hidden-coast-48928.herokuapp.com/"},
    {image: "blogsite.png", title: "Blog Site", link: "https://serene-wildwood-22136.herokuapp.com/blogs"},
    {image: "portfolio.png", title: "Portfolio Site", link: "https://nabendu82.github.io/"},
]

export default () => (
    <Layout>
        <Works>
            <GenericH2 none dark some style={{textAlign: 'center'}}>Our Works</GenericH2>
            <section class="gallery__flex">
             { projects && projects.map(proj => <Project key={proj.title} project={proj} />)}
            </section>
        </Works>
    </Layout>
)