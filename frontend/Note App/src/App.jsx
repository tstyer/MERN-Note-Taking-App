import React from 'react'
import { Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NotePage from './pages/NotePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-note" element={<CreatePage />} />
        <Route path="/note-page" element={<NotePage />} />
      </Routes>
      
    </div>
  )
}

export default App
