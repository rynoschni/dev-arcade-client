import React from "react";
import MemoryLogo from "./MemoryLogo.png"

function Logo(){
    return(
    <div id="memory-logo">
        <img className="memory-logo-image" src={MemoryLogo} alt="logo"/>
    </div>
    )
}

export default Logo;