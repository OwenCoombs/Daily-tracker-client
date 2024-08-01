import { useState } from "react";

import Sidebar from "./Sidebar";
import TaskList from "./Tasklist";
import AddTaskButton from "./Taskbutton";
import TaskInputModal from "./Taskinput";



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  return (
    <div className="app">

      <div className="main-content">
        <Sidebar />
        <TaskList tasks={tasks} />
      </div>
      <AddTaskButton onClick={handleAddTask} />
      <TaskInputModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveTask} />
    </div>
  );
};

export default App;