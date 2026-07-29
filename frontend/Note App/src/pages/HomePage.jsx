import {React, useState } from 'react';
import NavBar from '../components/NavBar';


const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false);

  return (
    <div data-theme="retro" className="min-h-screen">
      <NavBar />
    </div>
  )
}

export default HomePage
