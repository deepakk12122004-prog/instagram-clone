import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 
import "./Comments.css"; 
 
function CommentsPage() { 
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [post, setPost] = useState(null); 
  const [text, setText] = useState(""); 
 
  const load = () => 
    fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, { credentials: "include" }) 
      .then((r) => r.json()) 
      .then(setPost); 
 
  useEffect(() => { load(); }, [id]); 
 
  const addComment = async () => { 
    if (!text.trim()) return; 
    await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}/comment`,{
      method: "POST", 
      credentials: "include", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ text }) 
    }); 
    setText(""); 
    load(); 
  }; 
 
  const deleteComment = async (commentId) => { 
    await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}/comment/${commentId}`, { 
      method: "DELETE", 
      credentials: "include" 
    }); 
    load(); 
  }; 
 
  if (!post) return null; 
 
  return ( 
    <div className="comments-page"> 
      <div className="comments-header"> 
        <span onClick={() => navigate(-1)}>←</span> 
        <h3>Comments</h3> 
      </div> 
      <div className="comments-list"> 
        {post.comments.map((c) => ( 
          <div key={c._id} className="d-flex justify-content-between align-items-center"> 
            <p><b>{c.user}</b> {c.text}</p> 
            <i 
              className="bi bi-trash" 
              style={{ cursor: "pointer" }} 
              onClick={() => deleteComment(c._id)} 
            ></i> 
          </div> 
        ))} 
      </div> 
      <div className="comment-input-row"> 
        <input 
          placeholder="Add a comment..." 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        /> 
        <button onClick={addComment}>Post</button> 
      </div> 
    </div> 
  ); 
} 
 
export default CommentsPage;