import React from 'react';

const Chair = props => {
  return (
    <li className="menu-item" key={props.id}>
      <div className="img-wrap">
        <img
          className="img-thumb"
          src={`images/main/task_chair_${props.id}.jpeg`}
          alt={props.title}
        />
      </div>
      <h3 className="item-title">{props.title}</h3>
      <p className="item-desc">{props.desc}</p>
    </li>
  );
};

export default Chair;
