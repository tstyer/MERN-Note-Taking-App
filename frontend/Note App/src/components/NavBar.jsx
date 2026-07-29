import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const NavBar = () => {
  return (
      <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl px-4 py-4'>
          <div className='flex items-center justify-between'> 
            
            <h1 className='text-3xl font-bold tracking-tight text-neutral font-mono'>Notely</h1>

            <div className='flex items-center gap-4'>
              
              <Link to={'/CreatePage'} className='btn btn-primary'>

                <PlusIcon className='size-5'></PlusIcon>
                <span>New Note</span>
                
              </Link>

            </div>

          </div>
        </div>

      </header>
  )
}

export default NavBar


/* Learning 

  # justify between pushes items away from one another

*/