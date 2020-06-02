import React from 'react';
import Return from "../Return";
import styles from "./View.module.css";
/*
* Tap to see the "after" picture feature needs to be implemented.
* A simple juxtaposition is just fine for larger screens. 
*/

// View component
export default props => {
    console.log(props)
    return (
        <div>
            <Return />
            <div className={styles.container}>
                <div className={styles.before}>
                    <img className={styles.image} alt="i am an " src={props.images[props.match.params.id].before} />
                </div>
                <div className={styles.after}>
                    <img className={styles.image} alt="i am an " src={props.images[props.match.params.id].after} />
                </div>
            </div>
            <Return />
        </div>
    );
}
