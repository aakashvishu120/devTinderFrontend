import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

    const [emailId, setEmailId] = useState("dhoni@gmail.com");
    const [password, setPassword] = useState("Dhoni@123");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const res = await axios.post(BASE_URL+ "/login", {emailId, password}, {withCredentials : true});
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch(err){
            setError(err?.response?.data || "Something went Wrong");
            console.error(err);
        }
    }


    return (
        <div className='flex justify-center my-10'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className='my-2 '>
                      <label className='form-control w-full max-w-xs'>
                        <div className='label py-2'>
                            <span className='label-text'>Email ID</span>
                        </div>
                        <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} className='input input-bordered w-full max-w-xs' />
                      </label>
                      </div>

                      <div className='my-2'>
                      <label htmlFor="" className='form-control w-full max-w-xs'>
                        <div className='label py-2'>
                            <span className='label-text'>Password</span>
                        </div>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input input-bordered w-full max-w-xs' />
                      </label>
                      </div>

                      <p className='text-red-500'>{error}</p>

                    <div className="card-actions justify-center m-2">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login