import { Routes, Route, Navigate } from "react-router-dom"
import { Footer, Navbar } from "../../ui"
import { ClientPage, ContactPage, StartPage, TechnologyPage, UsPage } from "../pages"
import '../../App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";    
import "primereact/resources/primereact.min.css";  


export const AtomoRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container-fluid">
            <Routes>
                    <Route path="start" element={<StartPage/>} />
                    <Route path="us" element={<UsPage />} />
                    <Route path="client" element={<ClientPage />} />
                    <Route path="technology" element={<TechnologyPage />} />
                    <Route path="contact" element={<ContactPage />} />

                    <Route path="/*" element={<Navigate to="/start"/>} />
            </Routes>
       </div>
       <Footer/>
    </>
  )
}
