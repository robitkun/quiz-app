import React from 'react';

const PrevButton = ({ prevHandler }) => {
  return <button onClick={() => prevHandler()}>Prev</button>;
};

export default PrevButton;
