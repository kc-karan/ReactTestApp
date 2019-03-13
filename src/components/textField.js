import TextField from '@material-ui/core/TextField';
import React from 'react';

const inputProps = {
    step: 300,
  };
function textField() {
    return <TextField
          id="answer"
          label="Answer"
          multiline
          rows="4"
          defaultValue="Enter/paste your answer here..."
          margin="normal"
          variant="outlined"
    />
}

export default textField;