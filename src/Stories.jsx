import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Stories() {
  const[Stories,setStories]=useState([]);

  const navigate =useNavigate()
  
  let tot=0;
  

  useEffect(()=>{
  fetch('http://localhost:3001/story').
  then(data=>data.json()).
  then(data=>setStories(data)).
  catch(err=>console.log(err))
},[])


return(
   
  <div className='story d-flex'>
   <div className='d-none'>{tot= Stories.length}</div> 
      {Stories.length>0?(
        Stories.map((story)=>(
          <div key={story.id} className='mx-1'onClick={()=>{
            navigate(`/story/${story.id}/${tot}`)
          }}>
            <div className='gradient-border'>
              <img src={story.user.profilePic} alt="dp" className='story-dp rounded-circle' />
            </div>
            
            <p className='text-truncate' style={{width:"55px"}}>{story.user.username}</p>
          </div>
        ))
      ):(
        <p>loading</p>
      )}
  </div>
)
}
  
export default Stories