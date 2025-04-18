import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';
import { BASE_URL } from '../utils/constants';

const UserCard = ({user}) => {
    const {_id , firstName, lastName, photoUrl, age, gender, about}  =  user;
    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {withCredentials : true});
            dispatch(removeUserFromFeed(userId));
        } catch (err) {
            console.error(err);
            
        }
    }

    
  return (
    <div className="card bg-base-300 w-96 shadow-sm p-2">
    <figure>
      <img
        src={photoUrl}
        alt="UserCard" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
      <p className=''>{about}</p>
      <div className="card-actions justify-center my-4">
        <button className="btn btn-warning" onClick={()=> handleSendRequest("ignored" , _id)}>Ignore</button>
        <button className="btn btn-success" onClick={()=> handleSendRequest("interested" , _id)}>Interested</button>

      </div>
    </div>
  </div>
  )
}

export default UserCard