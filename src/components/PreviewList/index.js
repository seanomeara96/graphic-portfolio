import React from "react";
import styles from "./PreviewList.module.css";
import Preview from "../Preview";

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