import { h } from "preact";
import React from "react";
import Styles from "./styles.module.scss";

const Button = ({ children }) =>{
  return (
    <button>{ children }</button>
  ) 
}

export default Button;
