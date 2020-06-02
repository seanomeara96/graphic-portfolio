import React from "react";
import styles from "./PreviewList.module.css";
import Preview from "../Preview";

// Preview-List component
export default props => {
    console.log(props)
    let previews = []
    props.images.forEach(element => {
        previews.push(
            <Preview 
            before={element.before} 
            after={element.after} 
            key={Math.random()} 
            />
        )
    });
    console.log("previews array", previews);
    return (
        <div className={styles.container} >
            {previews}
        </div>
    );
}
