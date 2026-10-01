import { Navigate } from "react-router-dom"; 
import { useAuth } from "./AuthContext"; 
 
export default function ProtectedRoute({ children }) { 
  const { isLoggedIn, loading } = useAuth(); 
 
  if (loading) return <div className="text-center mt-5">Loading...</div>; 
  return isLoggedIn ? children : <Navigate to="/login" replace />; 
} 