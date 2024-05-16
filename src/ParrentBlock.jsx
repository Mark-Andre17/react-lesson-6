import React from "react";
import Small from "./Small";
import Large from "./Large";


function ParrentBlock(){
    const num = 57;
    return(
        <div>
            {num < 50 ? <Small/> : <Large/>}
        </div>
    )
}

export default ParrentBlock;