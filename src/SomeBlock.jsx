import React from "react";
import './style.css';


function SomeBlock() {
    const dark = true; // dark background
    // const dark = false; // light background
  
    return(
      <div className={dark ? 'dark' : 'light'}>
        Hello, ternary operator!
      </div>
    );
  }


export default SomeBlock;