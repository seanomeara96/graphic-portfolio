import React from "react";
import { Link } from "react-router-dom";
import styles from "./Return.module.css";

// Learn how to design buttons. This sucks.

// Return Button
export default () => {
    return <Link className={styles.button} to="/" >Go Back!</Link>
};
