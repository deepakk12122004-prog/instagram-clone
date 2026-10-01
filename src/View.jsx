


import React, { useEffect, useState } from 'react' 
import { useParams, Link, useNavigate } from 'react-router-dom' 
 
function View() { 
  const { id, tot } = useParams() 
  const storyId = Number(id) 
  const total = Number(tot) 
 
  const [story, setStory] = useState(null) 
  const navigate = useNavigate() 
 
  useEffect(() => { 
    // redirect if out of range, and don't fetch 
    if (storyId > total || storyId <= 0) { 
      navigate('/') 
      return 
    } 
 
    fetch(`http://localhost:3001/story/${storyId}`) 
      .then(res => { 
        if (!res.ok) throw new Error('Story not found') 
        return res.json() 
      }) 
      .then(data => setStory(data)) 
      .catch(err => { 
        console.log(err) 
        navigate('/') 
      }) 
  }, [storyId, total]) 
 
  return ( 
    <div> 
      {story ? ( 
        <div className='d-flex'> 
          <Link to={`/story/${storyId - 1}/${total}`}> 
            <i className='arrow bi bi-arrow-left-circle-fill'></i> 
          </Link> 
 
          <img className='simg vh-100 mt-4' src={story.image} alt='story' /> 
 
          <Link to={`/story/${storyId + 1}/${total}`}> 
            <i className='arrow bi bi-arrow-right-circle-fill'></i> 
          </Link> 
        </div> 
      ) : ( 
        <div>loading</div> 
      )} 
    </div> 
) 
} 
export default View