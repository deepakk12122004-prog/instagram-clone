import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./CreatePost.css"; 
 
function CreatePost() { 
  const [file, setFile] = useState(null); 
  const [preview, setPreview] = useState(null); 
  const [caption, setCaption] = useState(""); 
  const [location, setLocation] = useState(""); 
  const navigate = useNavigate(); 
  
 
  const handleFile = (e) => { 
    const f = e.target.files[0]; 
    setFile(f); 
    setPreview(URL.createObjectURL(f)); 
  }; 
 
  const handleShare = async () => { 
    const formData = new FormData(); 
    formData.append("image", file); 
    formData.append("caption", caption); 
    formData.append("location", location); 
 
    await fetch(`${import.meta.env.VITE_API_URL}//api/posts`, { 
      method: "POST", 
      credentials: "include", 
      body: formData 
    }); 
    navigate("/"); // Feed re-fetches and shows it at the top 
  }; 
 
  return ( 
    <div className="new-post-page"> 
      <div className="new-post-header"> 
        <span onClick={() => navigate(-1)}>←</span> 
        <h3>New post</h3> 
      </div> 
 
      {!preview ? ( 
        <label className="upload-box"> 
          Select from gallery 
          <input type="file" accept="image/*" onChange={handleFile} hidden /> 
        </label> 
      ) : ( 
        <img src={preview} className="new-post-preview" alt="preview" /> 
      )} 
 
      <textarea 
        className="caption-input" 
        placeholder="Add a caption..." 
        value={caption} 
        onChange={(e) => setCaption(e.target.value)} 
      /> 
 
      <div className="option-row"> 
        <span>
 👤
 Tag people</span> 
        <span>›</span> 
      </div> 
 
      <div className="option-row"> 
        <input 
          placeholder="
 📍
 Add location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        /> 
      </div> 
 
      <button className="share-btn" onClick={handleShare} disabled={!file}> 
        Share 
      </button> 
    </div> 
  ); 
} 
export default CreatePost;