import { useAuthContext } from '@/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
    const location = useLocation();
    console.log(location);
    if (!user) {
      return ( <Navigate to="/login"
      state={{ pathname: location.pathname }}
        replace
     />
      );
    }
    return children;
};
export default ProtectedRoute;
