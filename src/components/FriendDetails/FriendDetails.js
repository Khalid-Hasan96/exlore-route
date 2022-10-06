import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
      const friend = useLoaderData();
      console.log(friend)
      return (
            <div>
                  <h1>Friend Details</h1>
                  <h4>Details About:{friend.name}</h4>

            </div>
      );
};

export default FriendDetails;