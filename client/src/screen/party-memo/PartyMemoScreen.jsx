import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './PartyMemoScreen.css'

import BackArrow from '../../assets/back.png';

import { getParties } from '../../services/api';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const PartyMemoScreen = () => {
  const [partyName, setPartyName] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate();

  // const party = parties.filter(i => i.name === id);

  useEffect(() => { 
    const getData = async () => { 
      const resp = await getParties();

      const party = resp.data.filter(i => i._id === id);
      setPartyName(party[0]?.party_name);
    };
    getData();
  }, []);
  return (
    <div className='memo'>

      <div className='memo-title'>
        <img src={BackArrow} className='memo-back-arrow' onClick={() => navigate(-1)}/>
        <h1 className='memo-party-name'>Party Memo</h1>
      </div>

      <div className='memo-body'>
        {/* <img src={party[0].logo} className='memo-party-logo' /> */}
        <h2 className='body-name'>{partyName}</h2>
        <p className='body-para'>{description}</p>
      </div>
    </div>
  )
};

export default PartyMemoScreen