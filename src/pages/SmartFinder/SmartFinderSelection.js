import React, { useState } from 'react';
import './SmartFinderSelection.scss';

const SmartFinderSelection = ({ sort }) => {
  const [isClicked, setIsClicked] = useState('notSelected');

  const onClick = () => {
    isClicked === 'notSelected'
      ? setIsClicked('selected')
      : setIsClicked('notSelected');
  };

  return (
    <div key={sort} onClick={onClick} className={`selection ${isClicked}`}>
      <div className="finder-select-bar"></div>
      <span>{sort}</span>
    </div>
  );
};

export default SmartFinderSelection;
