import React, { Component } from 'react';
import './App.css';
import SubmitButton from './components/Buttons/submitButton.js';
import Dd from './components/Dropdown/threeQuestionsDropdown.js';
import Divider from 'muicss/lib/react/divider';

class App extends Component {
  render() {
    return (
      <div>
          <span>
            <div className="center-div">
              <Dd />
            </div>
          </span>
          <span className="mui--divider-left">
            <div className="center-div">
              <SubmitButton />
            </div>
            <p id="question">
              Select one of 3 questions...
            </p>
          </span>
      </div>
    );
  }
}

export default App;
