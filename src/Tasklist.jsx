const TaskList = ({ tasks }) => {
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    );
  };
  
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


  export default TaskList