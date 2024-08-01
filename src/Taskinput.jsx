const TaskInputModal = ({ isOpen, onClose, onSave }) => {
    return (
      isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Task</h2>
            <input type="text" placeholder="Task Name" />
            <input type="text" placeholder="Description" />
            <input type="time" />
            <select>
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <button onClick={onSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      )
    );
  };


  export default TaskInputModal