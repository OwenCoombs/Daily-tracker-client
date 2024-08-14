function Header({ toggleMenu, menuOpen, setView }) {
  return (
    <header className="header">
      <h1>Daily Task Tracker</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      {menuOpen && (
        <nav className="menu">
          <ul>
            <li onClick={() => setView('daily')}>Daily Tasks</li>
            <li onClick={() => setView('weekly')}>Weekly Tasks</li>
            <li onClick={() => setView('monthly')}>Monthly Tasks</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;