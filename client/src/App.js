import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// screen components
import VerificationScreen from './screen/verification/VerificationScreen'
import VoteScreen from './screen/cast-vote/VoteScreen'
import PartyMemoScreen from './screen/party-memo/PartyMemoScreen'
import AlreadyVotedScreen from './screen/already-voted/AlreadyVotedScreen'

const App = () => {
  const [voterID, setVoterID] = useState();

  const handleVoterID = (e) => {
    setVoterID(e.target.value);
  };

  return (
    <Routes>
      <Route path='/' element={<VerificationScreen voterID={voterID} handleVoterID={handleVoterID} />} />
      <Route path='/voted' element={<AlreadyVotedScreen />} />
      <Route path='/cast-vote' element={<VoteScreen voterID={voterID} />} />
      <Route path='/party-memo/:id' element={<PartyMemoScreen />} />
    </Routes>
  )
}

export default App