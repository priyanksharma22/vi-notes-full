import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div style={{ padding: '2rem' }}>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }: { children: React.ReactElement }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div style={{ padding: '2rem' }}>Loading...</div>;
  return user ? <Navigate to="/dashboard" replace /> : children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;