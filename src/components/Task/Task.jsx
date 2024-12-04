import React from 'react';
import './Task.css';

const Task = ({ title, priority, tag }) => {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <div className="tags">
        {tag.map((t, index) => (
          <span key={index} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Task;
