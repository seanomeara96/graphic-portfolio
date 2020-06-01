import React from 'react';
import Return from "../Return";
/*
* Those divs could probably be moved to the Return component.
* Image should be passed via props from App.
* Tap to see the "after" picture feature needs to be implemented.
* A simple juxtaposition is just fine for larger screens. 
*/
// View component
export default props => {
    console.log(props)
    return (
        <div>
            <div>
                <Return />
            </div>
            whatever text down here
            <div>
                <Return />
            </div>
        </div>
    );
}
