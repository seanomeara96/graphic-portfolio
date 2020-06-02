import React from "react";
import { Link } from "react-router-dom";
import {container, card, back, image, front} from "./Preview.module.css";

// Preview component
export default ({before, after, id}) => {
    return (
        <Link to={`/graphic-portfolio/${id}`} className={container}>
            <div className={`${card} ${back}`} >
                <img className={image} src={after} alt={`photoshop`}></img>
            </div>
            <div className={`${card} ${front}`} >
                <img className={image} src={before} alt={`photoshop`}></img>
            </div>
        </Link>
    );
};
