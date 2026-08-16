import React from 'react'
import { useState, Link } from 'react'
import { ArrowBigLeftIcon, ArrowUpLeftIcon } from 'lucide-react';


const CreatePage = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='mx-auto px-4 py-8'>
          <div className='mx-w-2xl mx-auto'>
            <Link to={"/"} className='btn btn-ghost mb-6'>
              <ArrowUpLeftIcon className='size-5'>Back To Notes</ArrowUpLeftIcon>
            </Link>
                  
          </div>
      </div>
      

      
    </div>
  )
}

export default CreatePage
