import React from 'react'
import { useNavigate} from 'react-router-dom'



function Sidebar() {

  const navigate=useNavigate()
  return (
     <div className='d-flex d-column m-3 position-fixed'>
        <div className='d-flex flex-column gap-3'>
        <img className="logo-text" src="src/print-204012264.webp" alt="" />
        <div><i className='bi bi-house-door'></i>Home</div>
        <div><i className='bi bi-search'></i>Search</div>
        <div><i className='bi bi-compass'></i>Explore</div>
        <div><i className='bi bi-play-btn'></i>Reels</div>
        <div><i className='bi bi-chat-dots'></i>Message</div>
        <div><i className='bi bi-heart'></i>Notification</div>
        <div onClick={()=>{navigate('/create')}}><i className='bi bi-plus-square'></i>Create</div>
        <div onClick={()=>{navigate('/profilepage')}}><i className='bi bi-person-circle'></i>profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className='bi bi-threads'></i>Threads</div>
        <div><i className='bi bi-list'></i>More</div>
    </div>
    </div>

  )
}

export default Sidebar