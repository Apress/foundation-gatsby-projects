import React, { Component } from 'react'
import styles from "../../css/items.module.css"
import Place from "./Place"
import Title from "../Title"

class PlaceList extends Component {
    state = {
        places: [],
        sortedPlaces: [],
    }

    componentDidMount() {
        this.setState({
            places: this.props.places.edges,
            sortedPlaces: this.props.places.edges
        })
    }
    render() {
        return (
        <section className={styles.tours}>
            <Title title="hampi" subtitle="places" />
            <div className={styles.center}>
                {this.state.sortedPlaces && this.state.sortedPlaces.map(({ node }) => {
                    return <Place key={node.contentful_id} place={node} />
                })}
            </div>
        </section>
        )
    }
}
export default PlaceList
