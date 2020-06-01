import React from "react";
import styles from "./PreviewList.module.css";
import Preview from "../Preview";
/*
* Needs a for loop.
* Image URLS should be passed from main App component.
*/
// Preview-List component
export default props => {
    return (
        <div className={styles.container} >
            <Preview />
            <Preview />
            <Preview />
            <Preview />
            <Preview />
        </div>
    );
}
