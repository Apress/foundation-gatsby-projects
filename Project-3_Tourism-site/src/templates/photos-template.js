import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import SEO from "../components/SEO"

const Photos = ({ data }) => {
    const { name, description, images } = data.photo;
    let mainImage = images[1].fluid;

    return (
        <Layout>
            <SEO title={name} description={`Royalty free image of ${name}`}/>
            <section className={styles.blog}>
                <h1 className={styles.center}>{name}</h1>
                <div className={styles.center}>
                    <Img fluid={mainImage} alt="single image" />
                    <h4>{description}</h4>
                    <AniLink fade to="/photos" className="btn-primary">all photos</AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query getPhoto($slug: String!) {
    photo: contentfulPhotos(slug:{eq:$slug}) {
        name
        description
        images {
            fluid {
                ...GatsbyContentfulFluid
            }
        }
    }
}
`;

export default Photos
