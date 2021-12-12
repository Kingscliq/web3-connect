import React from 'react';
import './home.css';
const Home = ({ logout, activeAccount }) => {
  return (
    <>
      <div className="home-wrapper">
        <div className="card">
          <div className="home-card">
            <h1>Welcome to the Metaverse 😇</h1>
            <p>
              <span style={{ color: 'green' }}>Address:</span> &nbsp;
              {activeAccount && activeAccount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
