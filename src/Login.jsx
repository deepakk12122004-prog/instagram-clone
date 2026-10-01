import { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import { useAuth } from "./AuthContext";
import "./index.css";


export default function Login() { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const { login } = useAuth(); 
  const navigate = useNavigate(); 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setError(""); 
    const result = await login(email, password); 
    if (result.success) { 
      navigate("/"); 
    } else { 
      setError(result.message); 
    } 
  }; 
 
  return ( 
    <div className="auth-wrapper"> 
      <div className="auth-box"> 
        <div className="auth-logo">Instagram</div> 
        <form onSubmit={handleSubmit}> 
          <input 
            type="text" 
            className="auth-input" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          /> 
          <input 
            type="password" 
            className="auth-input" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          /> 
          {error && <p className="auth-error">{error}</p>} 
          <button type="submit" className="auth-btn"> 
            Log In 
          </button> 
        </form> 
        <div className="auth-switch"> 
          Don't have an account? <Link to="/register">Sign up</Link> 
        </div> 
      </div> 
</div> 
); 
} 