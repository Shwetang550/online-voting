import React from 'react'
import './VerificationScreen.css'

// logo
import Logo from '../../assets/vote.png';
import { useNavigate } from 'react-router-dom';

const VerificationScreen = () => {
    const navigate = useNavigate();

    const handleSubmit = () => { 
        navigate('/cast-vote')
    };

    return (
        <div className='verify'>
          
            <div className='verify-logo-container'>
                <img src={Logo} className='verify-logo' />
                <h2 className='verify-logo-title'>Online Voting App</h2>
            </div>

            <div className='verify-body'>
                <input
                    className='verify-input'
                    placeholder='enter voter id here...'
                />
                <button className='verify-btn' onClick={handleSubmit}>Submit</button>
            </div>
    
        </div>
    )
}

export default VerificationScreen