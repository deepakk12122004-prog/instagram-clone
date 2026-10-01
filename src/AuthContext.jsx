import { createContext, useContext, useState, useEffect } from "react"; 
 
const AuthContext = createContext(); 
const API_URL = import.meta.env.VITE_API_URL; 
 
export function AuthProvider({ children }) { 
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); // true while checking session 
 
  // On app load, ask the server if we already have a valid session 
  useEffect(() => { 
    fetch(`${API_URL}/profile`, { credentials: "include" }) 
      .then((res) => { 
        if (!res.ok) throw new Error("Not logged in"); 
        return res.json(); 
      }) 
      .then((data) => setUser(data)) 
      .catch(() => setUser(null)) 
      .finally(() => setLoading(false)); 
  }, []); 
 
  const login = async (email, password) => { 
    const res = await fetch(`${API_URL}/login`, { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      credentials: "include", 
      body: JSON.stringify({ email, password }), 
    }); 
    const data = await res.json(); 
    if (!res.ok) { 
      return { success: false, message: data.message || "Login failed" }; 
    } 
    setUser(data.user); 
    return { success: true }; 
  }; 
 
  const logout = async () => { 
    await fetch(`${API_URL}/logout`, { 
      method: "POST", 
      credentials: "include", 
    }); 
    setUser(null); 
  }; 
 
  const register = async (username, email, password) => { 
    const res = await fetch(`${API_URL}/register`, { 
      method: "POST", 
      headers: { "Content-Type": "application/json" },
       credentials: "include", 
      body: JSON.stringify({ username, email, password }), 
    }); 
    const data = await res.json(); 
    if (!res.ok) { 
      return { success: false, message: data.message || "Registration failed" }; 
    } 
    setUser(data.user);
    return { success: true }; 
  }; 
 
  return ( 
    <AuthContext.Provider 
      value={{ user, isLoggedIn: !!user, loading, login, logout, register }} 
    > 
      {children} 
    </AuthContext.Provider> 
  ); 
} 
 
export const useAuth = () => useContext(AuthContext);