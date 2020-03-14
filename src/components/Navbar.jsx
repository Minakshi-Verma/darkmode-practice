import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div onClick={toggleMode} className="dark-mode__toggle">
        <div
          // onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
// I moved onclick handler from line 14 to line 12, It will make the toggle work more efficiently. You can click anywhere in the toggle div and it will change(with previous setting, we were forced to click on orange circle)