import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-logo">Vi-Notes</h1>
        <div className="dashboard-user">
          <span>{user?.email}</span>
          <button onClick={handleLogout} className="logout-button">
            Sign Out
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <h2>Welcome back</h2>
        <p>You are successfully logged in. Your writing sessions will appear here.</p>
      </main>
    </div>
  );
};

export default Dashboard;