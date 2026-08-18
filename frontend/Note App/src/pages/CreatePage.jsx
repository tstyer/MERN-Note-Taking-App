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

            <div className='card bg-base-100'>
              <div className='body'>
                <h2 className='card-title text-2xl mb-4'>
                  Create New Note
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Title</span>
                    </label>

                    <input type="text"
                      placeholder='Note Text'
                      className='input input-bordered'
                      value={title}
                      onChange={(e) => setTitle(e.title.value)}
                    />
                  </div>

                </form>

              </div>

            </div>
                  
          </div>
      </div>
      

      
    </div>
  )
}

export default CreatePage
