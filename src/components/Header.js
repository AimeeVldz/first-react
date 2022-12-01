import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo-display">
          <img src="https://bit.ly/3uaJcLa" alt="logo" className="nav-logo" />
          <h1 className="nav-name">React Facts</h1>
        </div>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
