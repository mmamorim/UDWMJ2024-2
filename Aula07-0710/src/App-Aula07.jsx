import { useState } from 'react'
import Relogio from './components/relogio.jsx'

function App() {

  return (
    <>
      <h1>oi gente</h1>
      <Relogio hora="10" min="0" />
      <Relogio hora="15" min="30" />
      <Relogio />
    </>
  )
}

export default App
