import React from 'react'
import { use } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const NoteDetailPage = () => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState[true];
    const [saving, setSaving] = useState[false];
    
    const navigate = useNavigate();

    const {id} = useParams();

    console.log({ id });

    useEffect(() => {
        const fetchNote = async () => {

            try {
                const response = await api.get(`notes/${id}`)
                setNote(response.data)
            } catch {

            } finally {

            }

        }
        fetchNote()

    }, [id]) // execute the function when whatever in the square brackets changes

    return (
    
    <div>
      
    </div>
  )
}

export default NoteDetailPage
