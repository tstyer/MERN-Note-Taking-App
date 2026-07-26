import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Toaster } from 'react-hot-toast';
 
// wrap app in browser router so whole app is in router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
      <Toaster />
    </BrowserRouter>
    
  </StrictMode>,
)
