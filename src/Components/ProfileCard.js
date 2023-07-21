import React from 'react'
import './ProfileCard.css'

function ProfileCard(props) {
  return (
    <div className='container'>
      <div className="inner">
        <h1>Name:{props.name}</h1>
        <p>Email:{props.email}</p>
      </div>
    </div>
  );
}

export default ProfileCard