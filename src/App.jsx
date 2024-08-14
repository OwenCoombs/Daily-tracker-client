import React, { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('daily');
  const [menuOpen, setMenuOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, view }]);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} setView={setView} />
      <TaskInput addTask={addTask} />
      <h2>{view.charAt(0).toUpperCase() + view.slice(1)} Tasks</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const TaskList = ({ tasks }) => (
  <div className="task-list">
    {tasks
      .filter(task => task.view === view)
      .map((task, index) => (
        <Task key={index} task={task.text} />
      ))}
  </div>
);

const Task = ({ task }) => (
  <div className="task">
    <p>{task}</p>
  </div>
);

export default App;