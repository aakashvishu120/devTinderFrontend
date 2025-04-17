import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user);

  const fetchUser = async () => {
    //only call API when redux store is empty
    if(userData) return;
  try{
    //every time page refresh, redux lost data , need login again and again
      const res = await axios.get(BASE_URL+ "/profile/view", {withCredentials:true}); 
      dispatch(addUser(res.data));
    }
    catch(err){
      if(err.status === 401){
        navigate("/login");
      }
      console.error(err);
    }
  }

  //once the component is loaded then useeffect will be called
  useEffect(()=>{
      fetchUser();
  },[]);


  return (
    <>
    <NavBar/>

    {/* in Outlet any childeren route will be render over here */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body