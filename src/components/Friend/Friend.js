import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
      const { id, name, email, username } = friend;
      return (
            <div className='friend'>
                  <h4>{name}</h4>
                  <p>{email}</p>
                  <p><small>username: <Link to={`/friend/${id}`}>{username}</Link></small></p>
            </div >
      );
};

export default Friend;