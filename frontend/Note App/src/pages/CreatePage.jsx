import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ArrowUpLeftIcon } from 'lucide-react';
import axios, { axiosinstance } from 'axios';
import toast from 'react-hot-toast';

const CreatePage = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // this prevents the title and message from being deleted on a page refresh - important for usability

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required!");
      return;
    }

    setLoading(true);
    try {
      await axiosInstance.post("api/notes", { title, content });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      toast.error("Failed to create note!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='mx-auto px-4 py-8'>
          <div className='max-w-2xl mx-auto'>
            <Link to={"/"} className='btn btn-ghost mb-6'>
              <ArrowUpLeftIcon className='size-5' />
              Back To Notes
            </Link>

            <div className='card bg-base-100'>
              <div className='card-body'>
                <h2 className='card-title text-2xl mb-4'>
                  Create New Note
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Title</span>
                    </label>

                    <input type="text"
                      placeholder='Note Title'
                      className='input input-bordered'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Content</span>
                    </label>

                    <textarea
                      placeholder='Write your note here...'
                      className='textarea textarea-bordered h-32'
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>

                  <div className='card-actions justify-end'>
                    <button type='submit' className='btn btn-primary' disabled={loading}>
                      {loading ? "Creating..." : "Create Note"}
                    </button>
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
