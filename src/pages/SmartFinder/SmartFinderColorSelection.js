import React, { useState } from 'react';
import './SmartFinderColorSelection.scss';

const SmartFinderColorSelection = ({ sort }) => {
  const [isClicked, setIsClicked] = useState('');

  const onClick = () => {
    isClicked === '' ? setIsClicked('selected') : setIsClicked('');
  };

  return (
    <div
      key={Object.keys(sort)}
      className={`finder-color-box ${Object.values(sort)} ${isClicked}`}
      onClick={onClick}
    >
      <div className={`finder-color-bar ${Object.values(sort)}`}></div>
      <span>{Object.keys(sort)}</span>
    </div>
  );
};

export default SmartFinderColorSelection;
