import React from 'react';
import './navbar.css';
const NavBar = ({ logout, isConnected }) => {
  return (
    <div className="main">
      <div className="container">
        <nav className="navbar">
          <div>
            <h2>Web 3 Connect.</h2>
          </div>
          <div>
            <ul className="nav-link">
              <li className="nav-items">Home</li>
              <li className="nav-items">About</li>
              {isConnected && (
                <li className="nav-items" onClick={() => logout()}>
                  Logout
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
