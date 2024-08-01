const Sidebar = ({ isOpen, onClose }) => {
    return (
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={onClose}>
          &times;
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Today's Tasks</li>
            <li>Weekly View</li>
            <li>Completed Tasks</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;