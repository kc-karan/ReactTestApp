import React, { Component } from 'react';
import './App.css';
import SubmitButton from './components/Buttons/submitButton.js';
import Dd from './components/Dropdown/threeQuestionsDropdown.js';
import TextField from './components/textField.js';

class App extends Component {
  var 
  render() {
    return (
      <div>
          <span>
            <div className="center-div">
              <Dd />
            </div>
          </span>
          <span className="mui--divider-left">
            <p id="question" className="center-div">
              Select one of 3 questions...
            </p>
            <div className="center-div">
              <TextField />
            </div>
            <div className="center-div">
              <SubmitButton />
            </div>
          </span>
      </div>
    );
  }
}

export default App;
