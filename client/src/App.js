import React from 'react'
import { Route, Routes } from 'react-router-dom'

// screen components
import VerificationScreen from './screen/verification/VerificationScreen'
import VoteScreen from './screen/cast-vote/VoteScreen'
import PartyMemoScreen from './screen/party-memo/PartyMemoScreen'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<VerificationScreen />} />
      <Route path='/cast-vote' element={<VoteScreen />} />
      <Route path='/party-memo/:id' element={<PartyMemoScreen />} />
    </Routes>
  )
}

export default App