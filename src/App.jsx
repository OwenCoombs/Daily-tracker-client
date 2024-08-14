import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(23);

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedStartHour = Number(localStorage.getItem("startHour"));
    const savedEndHour = Number(localStorage.getItem("endHour"));
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks && savedStartHour >= 0 && savedEndHour >= 0) {
      setStartHour(savedStartHour);
      setEndHour(savedEndHour);
      setTasks(savedTasks);
    } else {
      setTasks(Array(endHour - startHour + 1).fill({ text: "", completed: false }));
    }
  }, []);

  // Save tasks and hours to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("startHour", startHour);
    localStorage.setItem("endHour", endHour);
  }, [tasks, startHour, endHour]);

  const handleTaskChange = (hour, event) => {
    const newTasks = [...tasks];
    newTasks[hour - startHour] = { ...newTasks[hour - startHour], text: event.target.value };
    setTasks(newTasks);
  };

  const handleTaskComplete = (hour) => {
    const newTasks = [...tasks];
    newTasks[hour - startHour] = { ...newTasks[hour - startHour], completed: !newTasks[hour - startHour].completed };
    setTasks(newTasks);
  };

  const handleTaskDelete = (hour) => {
    const newTasks = [...tasks];
    newTasks[hour - startHour] = { text: "", completed: false };
    setTasks(newTasks);
  };

  const formatHour = (hour) => {
    const period = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:00 ${period}`;
  };

  const handleRangeSubmit = (event) => {
    event.preventDefault();
    const newTasks = Array(endHour - startHour + 1).fill({ text: "", completed: false });
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Daily Hourly Tracker</h1>
      <form onSubmit={handleRangeSubmit} className="time-range-form">
        <label>
          Start Hour:
          <input
            type="number"
            value={startHour}
            onChange={(e) => setStartHour(Number(e.target.value))}
            min="0"
            max="23"
          />
        </label>
        <label>
          End Hour:
          <input
            type="number"
            value={endHour}
            onChange={(e) => setEndHour(Number(e.target.value))}
            min="0"
            max="23"
          />
        </label>
        <button type="submit">Set Range</button>
      </form>
      <div className="hourly-tracker">
        {tasks.map((task, index) => {
          const hour = startHour + index;
          return (
            <div key={hour} className="hour-block">
              <div className="hour-label">{formatHour(hour)}</div>
              <input
                type="text"
                value={task.text}
                onChange={(event) => handleTaskChange(hour, event)}
                placeholder="Enter task"
                className={`task-input ${task.completed ? "completed" : ""}`}
                disabled={task.completed}
              />
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskComplete(hour)}
                className="task-checkbox"
              />
              <button
                onClick={() => handleTaskDelete(hour)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;


