import React from 'react';

const NextButton = ({ nextHandler }) => {
  return <button onClick={() => nextHandler()}>Next</button>;
};

export default NextButton;
