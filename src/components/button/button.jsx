import React from "react";
import styles from "./button.css";



const Button = props => {
    return (
      <button type={props.type} className={`button ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };
  
  export default Button;
