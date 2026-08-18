import React, { useEffect } from 'react';
import { useState } from 'react';
import RateLimitedUI from '../components/RateLimitedUI';
import NavBar from '../components/NavBar';
import axios from 'axios'
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';

const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]); // notes originally set to empty array unless setNotes updates it
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/notes")
      console.log(response.data);
      if (ignore) return;
      setNotes(response.data);
      setIsRateLimited(false) // false because if you can get data, it's not rate limited
    } catch(error) {
      console.log("Error fetching notes")
      if (ignore) return;
      if(error.response?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to Display Notes!")
      }

    } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchNotes();
    return () => { ignore = true; };
  }, []);

  return (
    <div data-theme="retro" className="min-h-screen">
      <NavBar />

      {isRateLimited && < RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-primary py-10 text-center'>Loading Notes...</div>}

        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default HomePage
