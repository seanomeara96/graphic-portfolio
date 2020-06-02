import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Preview.module.css";
/*
* Component needs images.
* Refactor for string interpolation.
*/
// Preview component
export default ({before, after}) => {
    return (
        <Link to="/other" className={styles.container}>
            <div className={styles.card  + " " +  styles.back} >
                <img className={styles.image} src={after} alt="photoshop"></img>
            </div>
            <div className={styles.card + " " + styles.front} >
                <img className={styles.image} src={before} alt="photoshop"></img>
            </div>
        </Link>
    );
};
