import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './AtomoTechno.css' 
import { AtomoTechno } from './AtomoTechno.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
        <AtomoTechno />
    </BrowserRouter>
  </React.StrictMode>,
)
