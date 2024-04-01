import React from "react";
import './Display.css';

export default props =>
   
        <div className="display">
            <div className="miniDisplay">{props.value[1]}</div>
            <div className="mainDisplay">{props.value[0]}</div>        
        </div>

