import React from 'react';
import Return from "../Return";

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
