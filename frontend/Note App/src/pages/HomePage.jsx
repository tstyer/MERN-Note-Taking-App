import React, { useEffect } from 'react';
import { useState } from 'react';
import RateLimitedUI from '../components/RateLimitedUI';
import NavBar from '../components/NavBar';
import axios from 'axios'

const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]); // notes originally set to empty array unless setNotes updates it
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchNotes = async () => {
    try {  
      const response = await axios.get("http://localhost:5173/NotePage")
      console.log(response.data);

    } catch(error) {
      console.log("Error fetching notes")
    }
    
  }
    fetchNotes();
  }, []);

  return (
    <div data-theme="retro" className="min-h-screen">
      <NavBar />

      {isRateLimited && < RateLimitedUI />}
    </div>
  )
}

export default HomePage
