import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { addUser } from '../utils/userSlice';

export const EditProfile = ({user}) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveProfile = async() => {
        setError("");
        try{
            const res = await axios.patch(BASE_URL + "/profile/edit" , {
                firstName, lastName, photoUrl, age, gender, about
            }, {withCredentials :true});
            dispatch(addUser(res?.data?.data));
            setShowToast(true);

            //so that notificatin can remove aftter 3 second
            setTimeout(()=>{
                setShowToast(false);
            }, 3000);
        }
        catch(err){
            setError(err?.response?.data);
        }
    }

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", { emailId, password }, { withCredentials: true });
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch (err) {
            setError(err?.response?.data || "Something went Wrong");
            console.error(err);
        }
    }


    return (
        <div>
        <div className='flex justify-center my-10'>
        <div className='flex justify-center mx-10'>
            <div className="card bg-base-300 w-96 h-fit shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div className='my-2 '>
                        <label className='form-control w-full max-w-xs'>
                            <div className='label py-2'>
                                <span className='label-text'>First Name</span>
                            </div>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>

                    <div className='my-2'>
                        <label htmlFor="" className='form-control w-full max-w-xs'>
                            <div className='label py-2'>
                                <span className='label-text'>Last Name</span>
                            </div>
                            <input type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>

                    <div className='my-2 '>
                        <label className='form-control w-full max-w-xs'>
                            <div className='label py-2'>
                                <span className='label-text'>Age</span>
                            </div>
                            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>

                    <div className='my-2 '>
                        <label className='form-control w-full max-w-xs'>
                            <div className='label py-2'>
                                <span className='label-text'>Gender</span>
                            </div>
                            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>

                    <div className='my-2 '>
                        <label className='form-control w-full max-w-xs'>
                            <div className='label py-2'>
                                <span className='label-text'>About</span>
                            </div>
                            <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>

                    <div className='my-2 '>
                        <label className='form-control w-full max-w-xs'>
                            <div className='label py-2'>
                                <span className='label-text'>PhotoUrl</span>
                            </div>
                            <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>

                    <p className='text-red-500'>{error}</p>

                    <div className="card-actions justify-center m-2">
                        <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
        <UserCard user={{firstName, lastName, photoUrl, age, gender, about}}/>
        </div>

        {showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>Profile Updated Successfully</span>
        </div>
        </div>}

        </div>
    )
}
