// ProtectedRoute.jsx
import { Navigate } from 'react-router';
import { useUserContext } from '../hooks/contextHooks';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  if (user === null) {
    return <Navigate to="/" />;  //Voiko vain palauttaa tyhjän elementin?
  } else {
    return children;
  }


};

export default ProtectedRoute;
