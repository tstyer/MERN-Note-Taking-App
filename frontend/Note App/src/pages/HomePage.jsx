import React, { useEffect } from 'react';
import { useState } from 'react';
import RateLimitedUI from '../components/RateLimitedUI';
import NavBar from '../components/NavBar';


const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [])

  return (
    <div data-theme="retro" className="min-h-screen">
      <NavBar />

      {isRateLimited && < RateLimitedUI />}
    </div>
  )
}

export default HomePage
