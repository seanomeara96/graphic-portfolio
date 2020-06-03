import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBtn.module.css";

// Learn how to design buttons. This sucks.

// Nav Button
export default ({text, crntPageNo}) => {
    let page = parseInt(crntPageNo);
    let link = `/graphic-portfolio`;
    if (text === "Back" && page > 0) {
        link = `/graphic-portfolio/${page - 1}`;
    }
    if (text === "Next" && page < 6) {
        link = `/graphic-portfolio/${page + 1}`;
    }
    return (
        <div className={styles.buttonContainer} >
            <Link className={styles.button} to={link} >{text}</Link>
        </div>);
};
