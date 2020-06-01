// Probably just remove this altogether or add some external links 
// Whatever is less of an eye-sore
import React from "react";
import styles from "./Footer.module.css";
export default () => {
    return (
        <footer className={styles.footer} >
            <div className={styles.content}>
                &copy; Sean Jensen O'Meara 2020.
            </div>
        </footer>
    );
}
