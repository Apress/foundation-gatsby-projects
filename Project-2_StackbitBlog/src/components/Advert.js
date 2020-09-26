import React from 'react';
import styles from "./advert.module.css";
import img from "../../src/images/Gatsby.png"

const Advert = () => {

    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <img src={img} alt="Gatbsy Cookbook" className={styles.coverImg} />
                <a href="https://leanpub.com/gatsbycookbook" target="_blank" rel="noopener noreferrer">Buy on Leanpub</a>
            </div>
        </section>
    )
}

export default Advert;
