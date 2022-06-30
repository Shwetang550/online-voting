import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ListItem.css'

const ListItem = ({ logo, name, handleVote, candidate }) => {
    
    const navigate = useNavigate();

    return (
        <div className='party'>

            <div
                className='party-details'
                onClick={() => navigate(`/party-memo/${name}`)}
            >
                <img
                    className='party-logo'
                    src={logo}
                />

                <div className='candi-detail'>
                <h2 className='candidate-name'>{candidate}</h2>
                    <h3 className='party-name'>{name}</h3>
                </div>
            </div>

            <button
                className='party-vote'
                onClick={handleVote}
            >Vote</button>

        </div>
    )
}

export default ListItem