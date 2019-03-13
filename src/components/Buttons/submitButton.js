import React from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // Necessary

function Button() {
  return (
    <AwesomeButton
      type="primary"
      ripple
    >
      Button
    </AwesomeButton>
  );
}

export default Button;