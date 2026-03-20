import React from "react";



export const Light = (props) => {

    return (
        <div onClick={(event) => props.setCurrentActiveLight(props.color)}
        
            className= {`${props.color}-light ${(props.on == true) ? "active" : ""}`} 
            >
        </div>
        
    );

};