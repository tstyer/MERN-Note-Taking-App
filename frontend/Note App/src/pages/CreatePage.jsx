import React from 'react'
import { useState } from 'react'


const CreatePage = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='mx-auto px-4 py-8'></div>
      
    </div>
  )
}

export default CreatePage
