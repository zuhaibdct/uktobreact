import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const StringRepeater = () => {
  // State variables to store input values and output
  const [inputString, setInputString] = useState('');
  const [repeatCount, setRepeatCount] = useState(1);
  const [outputString, setOutputString] = useState('');

  // Event handler for input string change
  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  // Event handler for repeat count change
  const handleCountChange = (event) => {
    setRepeatCount(Number(event.target.value));
  };

  // Event handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Generate the output string by repeating the input string
    setOutputString(inputString.repeat(repeatCount));
  };

  return (
    <div style={{ marginLeft: 240, padding: '24px' }}>
      <form onSubmit={handleFormSubmit}>
        {/* Input string field */}
        <TextField
          label="Input String"
          variant="outlined"
          margin="normal"
          fullWidth
          value={inputString}
          onChange={handleInputChange}
        />
        {/* Repeat count field */}
        <TextField
          label="Repeat Count"
          variant="outlined"
          margin="normal"
          fullWidth
          type="number"
          value={repeatCount}
          onChange={handleCountChange}
        />
        {/* Submit button */}
        <Button type="submit" variant="contained" color="primary">
          Repeat
        </Button>
      </form>
      {/* Display the output string if available */}
      {outputString && (
        <Typography variant="body1" style={{ marginTop: '16px', wordBreak: 'break-all' }}>
          {outputString}
        </Typography>
      )}
    </div>
  );
};

export default StringRepeater;
