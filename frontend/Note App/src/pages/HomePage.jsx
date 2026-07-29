import React, { useEffect } from 'react';
import { useState } from 'react';
import RateLimitedUI from '../components/RateLimitedUI';
import NavBar from '../components/NavBar';
import axios from 'axios'
import toast from 'react-hot-toast';

const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]); // notes originally set to empty array unless setNotes updates it
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchNotes = async () => {
    try {  
      const response = await axios.get("http://localhost:5173/NotePage")
      console.log(response.data);
      setNotes(response.data);
      setIsRateLimited(false) // false because if you can get data, it's not rate limited
    } catch(error) {
      console.log("Error fetching notes")
      if(error.response.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to Display Notes!") 
      } 
      
    } finally {
        setLoading(false);
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
