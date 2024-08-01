import { Link } from "react-router-dom"

const Header = ({ onHamburgerClick }) => {
  return (
    <header className="app-header">
      <div className="hamburger-icon" onClick={onHamburgerClick}>
        &#9776;
      </div>
      <div className="logo">Task Tracker</div>
      <div className="profile-icon">
        <img src="profile-pic-url" alt="Profile" />
      </div>
    </header>
  );
};

export default Header