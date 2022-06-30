import React from 'react'
import { useState } from 'react'
import WebcamComponent from '../../components/WebcamComponent'

import './VoteScreen.css'

import ListItem from '../../components/list-item/ListItem';

import { parties } from '../../partiesList';

const VoteScreen = () => {
    const [vote, setVote] = useState(false);

    const handleVote = () => setVote(true);
    return (
        <div className='vote'>
          
            <div className='vote-photo'>
                <WebcamComponent
                    onVote={vote}
                />
            </div>

            <h3 className='vote-body-title'>Parties List</h3>
            
            <div className='vote-body'>
                {parties.map(i => (
                    <ListItem
                        key={i.id}
                        logo={i.logo}
                        name={i.name}
                        candidate={i.candidate}
                        handleVote={handleVote}
                    />
                ))}
            </div>
        </div>
    )
}

export default VoteScreen