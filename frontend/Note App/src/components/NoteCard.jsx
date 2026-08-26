import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import formatDate from '../lib/utils/utils'

const NoteCard = ({note}) => {

    const handleDelete = async (e, id) => {
        e.preventDefault(); // the default when clicking the card is to go to a new page - we want to prevent that when clicking delete

        if(!window.confirm("Are you sure you what to delete this message?")) {
            return;
        }
    }
  return (
    <Link to={`/note/${note._id}`}
        className='card
        bg-accent
        hover:shadow-lg
        transition-all
        duration-200
        border-t-4
        border-solid
        border-[#00ff9d]'>

        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(note.createdAt)}
                </span>

                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'></PenSquareIcon>
                    <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className='size-4 text-black'></Trash2Icon>
                    </button>
                </div>
            </div>

        </div>

    </Link>
  
  )
}

export default NoteCard
