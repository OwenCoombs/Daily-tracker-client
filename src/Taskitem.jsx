import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed} />
      <div className="task-details">
        <span className="task-name">{task.name}</span>
        <span className="task-time">{task.time}</span>
      </div>
    </div>
  );
};

export default TaskItem;