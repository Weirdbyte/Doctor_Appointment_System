import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoutes = ({ children }) => {
  const { user } = useSelector(state => state.user);
  
  if (localStorage.getItem('token') && user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoutes;