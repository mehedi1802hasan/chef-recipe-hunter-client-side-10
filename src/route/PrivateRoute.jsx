import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import { Navigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PacmanLoader color="#4F46E5" size={45} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
