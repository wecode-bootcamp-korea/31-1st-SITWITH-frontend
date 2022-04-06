import React from 'react';
import './ChairList.scss';

const ChairList = props => {
  const { category } = props;

  return (
    <ul className="menu-list">
      {CHAIR_DATA[category].map(chair => (
        <li className="menu-item" key={chair.title}>
          <div className="img-wrap">
            <img
              className="img-thumb"
              src={`images/main/${chair.category}_chair_${chair.title}.jpeg`}
              alt={chair.title}
            />
          </div>
          <h3 className="item-title">{chair.title}</h3>
          <p className="item-desc">{chair.desc}</p>
        </li>
      ))}
    </ul>
  );
};

const CHAIR_DATA = {
  office: [
    {
      title: 'T80',
      desc: 'ULTIMATE CHAIR',
      category: 'office',
    },
    {
      title: 'T50',
      desc: '좋은 의자의 기본',
      category: 'office',
    },
  ],
  baby: [
    {
      title: 'molti',
      desc: '앉음마부터 좋은 자세로',
      category: 'baby',
    },
    {
      title: 'atti',
      desc: '플레이 체어',
      category: 'baby',
    },
    {
      title: 'ringo',
      desc: '생각이 자라는 의자',
      category: 'baby',
    },
  ],
};

export default ChairList;
