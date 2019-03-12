import React from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
 
function Button() {
  return <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} ripple>Click here</AwesomeButton>;
}

export default Button;