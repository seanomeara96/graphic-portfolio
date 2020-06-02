import React from "react";
import { container } from "./PreviewList.module.css";
import Preview from "../Preview";

// Preview-List component
export default props => {
    let previews = []
    props.images.forEach(element => {
        previews.push(
            <Preview 
            before={element.before} 
            after={element.after} 
            key={previews.length} 
            />
        )
    });
    return (
        <div className={container} >
            {previews}
        </div>
    );
}
