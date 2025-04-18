import React from 'react'
import { EditProfile } from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user= useSelector(store => store.user);
  return (
    user && (<div className=''>
      <h1 className='flex justify-center items-center text-3xl my-2'>Profile Page</h1>
      <EditProfile user={user}/>
    </div>)
  )
}

export default Profile