import React from 'react'
import { useState } from 'react'
import WebcamComponent from '../../components/WebcamComponent'

import './VoteScreen.css'

import ListItem from '../../components/list-item/ListItem';

// import { parties } from '../../partiesList';
import { useEffect } from 'react';
import { getParties } from '../../services/api';

const VoteScreen = ({ voterID }) => {
    const [vote, setVote] = useState(false);
    const [parties, setParties] = useState([]);
    const [voterPhoto, setVoterPhoto] = useState();

    useEffect(() => { 
        const getData = async () => { 
            await getParties()
                .then(res => setParties(res.data))
                .catch(err => console.log(err));
        };
        getData();
    }, []);

    return (
        <div className='vote'>
          
            <div className='vote-photo'>
                <WebcamComponent
                    onVote={vote}
                    handleVoterPhoto={(e) => setVoterPhoto(e)}
                />
            </div>

            <h3 className='vote-body-title'>Parties List</h3>
            
            <div className='vote-body'>
                {parties.map(i => (
                    <ListItem
                        key={i._id}
                        id={i._id}
                        // logo={i.logo}
                        name={i.party_name}
                        candidate={i.candidate_name}
                        onVote={() => setVote(true)}
                        voterID={voterID}
                        voterPhoto={voterPhoto}
                    />
                ))}
            </div>
        </div>
    )
}

export default VoteScreen