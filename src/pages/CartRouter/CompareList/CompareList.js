import React, { useEffect } from 'react';
import './CompareList.scss';

const CompareList = ({ setSelect }) => {
  useEffect(() => {
    setSelect('compare');
  }, [setSelect]);

  return <div>CompareList</div>;
};

export default CompareList;
