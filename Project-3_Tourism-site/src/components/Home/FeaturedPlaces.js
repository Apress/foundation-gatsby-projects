import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Place from "../Places/Place"

const getFeaturedPlaces = graphql`
query{
featuredPlaces: allContentfulAmazingHampiData(filter:{featured:{eq:true}}) {
    edges {
        node {
            contentful_id
            name
            slug
            timeRequired
            timings
            entryFees
            featured
        images {
            fluid {
                ...GatsbyContentfulFluid
                }
            }
        }
        }
    }
}
`;

const FeaturedPlaces = () => {
    const response = useStaticQuery(getFeaturedPlaces)
    const places = response.featuredPlaces.edges

    return (
        <section className={styles.places}>
            <Title title="featured" subtitle="places" />
            <div className={styles.center}>
                {places.map(({ node }) => {
                    return <Place key={node.contentful_id} place={node} />
                })}
            </div>
            <AniLink fade to="/places" className="btn-primary">
                all places
            </AniLink>
        </section>
    )
}

export default FeaturedPlaces
