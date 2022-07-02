import React, { useState } from 'react'
import './VerificationScreen.css'

// logo
import Logo from '../../assets/vote.png';
import { useNavigate } from 'react-router-dom';

import { voters } from '../../votersList';

const VerificationScreen = ({voterID, handleVoterID}) => {

    const navigate = useNavigate();

    const handleSubmit = () => { 
        const voter = voters.filter(i => i.voter_id === voterID);

        if (voter[0].voted) {
            navigate('/voted')
        } else {
            navigate('/cast-vote')
        }
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
                    value={voterID}
                    onChange={(event) => handleVoterID(event)}
                />
                <button className='verify-btn' onClick={handleSubmit}>Submit</button>
            </div>
    
        </div>
    )
}

export default VerificationScreen