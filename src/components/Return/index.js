import React from "react";
import { Link } from "react-router-dom";
import styles from "./Return.module.css";

// Learn how to design buttons. This sucks.

// Return Button
export default () => {
    return (
        <div className={styles.buttonContainer} >
            <Link className={styles.button} to="/graphic-portfolio" >Go Back</Link>
        </div>);
};
