import { Routes, Route, Navigate } from "react-router-dom"
import { Footer, Navbar } from "../../ui"
import { ClientPage, ContactPage, StartPage, TechnologyPage, UsPage } from "../pages"


export const AtomoRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
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
