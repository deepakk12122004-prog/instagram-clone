import { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import { useAuth } from "./AuthContext"; 
import"./index.css";

 
export default function Register() { 
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(false); 
  const { register } = useAuth(); 
  const navigate = useNavigate(); 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setError(""); 
 
    if (!username.trim() || !email.trim() || !password.trim()) { 
      setError("All fields are required."); 
      return; 
    } 
 
    const result = await register(username, email, password); 
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
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          /> 
          <input 
            type="email" 
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
            Sign Up 
          </button> 
        </form> 
        <div className="auth-switch"> 
          Already have an account? <Link to="/login">Log in</Link> 
        </div> 
      </div> 
    </div> 
  ); 
} 


