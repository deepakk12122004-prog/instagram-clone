import { useEffect, useState } from 'react' 
import Stories from './Stories' 
//import Post from './Post' 
import RealPost from './RealPost' 
 
function Feed() { 
  const [realPosts, setRealPosts] = useState([]); 
 
  useEffect(() => { 
    fetch(`${import.meta.env.VITE_API_URL}/api/posts`, { credentials: 'include' }) 
      .then((res) => res.json()) 
      .then((data) => setRealPosts(data)) 
      .catch((err) => console.log(err)); 
  }, []); 
 
  const handleDeleted = (id) => { 
    setRealPosts((prev) => prev.filter((p) => p._id !== id)); 
  }; 
 
  return ( 
    <div> 
      <div><Stories/></div> 
      <div className="d-flex flex-column align-items-center mt-3"> 
        {realPosts.map((post) => ( 
          <RealPost key={post._id} post={post} onDeleted={handleDeleted} /> 
        ))} 

      </div> 
    </div> 
  ) 
} 
 
export default Feed