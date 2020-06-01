import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Preview.module.css";

// Preview component
export default props => {
    return (
        <Link to="/other" className={styles.container}>
            <div className={styles.card  + " " +  styles.back} ></div>
            <div className={styles.card + " " + styles.front} ></div>
        </Link>
    );
};