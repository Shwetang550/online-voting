import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateParty } from '../../services/api';
import './ListItem.css'

const ListItem = ({ logo, name, candidate, id, onVote, voterID, voterPhoto }) => {
    
    const navigate = useNavigate();

    const handleVote = async () => {
        onVote();
        await updateParty(id, {
            voter_id: voterID,
            voter_photo: voterPhoto
        })
        navigate('/voted');
    }

    return (
        <div className='party'>

            <div
                className='party-details'
                onClick={() => navigate(`/party-memo/${id}`)}
            >
                {logo && <img
                    className='party-logo'
                    src={logo}
                />}

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