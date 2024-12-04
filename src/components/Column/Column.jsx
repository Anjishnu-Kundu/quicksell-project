import React from 'react';
import './Column.css';
import Task from '../Task/Task';

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} title={task.title} priority={task.priority} tag={task.tag} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default Column;
