import { Link } from 'react-router'
import React from 'react'

const NoteCard = ({note}) => {
  return (
    <Link to={`/note/${note._id}`}>NoteCard</Link>
  
  )
}

export default NoteCard
