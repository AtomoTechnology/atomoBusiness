import { Routes, Route } from "react-router-dom"
import { AtomoRoutes } from "../atomo/routes/AtomoRoutes"

export const AtomoTechoRouter = () => {
  return (
    <>
       <Routes>
            {/* <Route path="login" element={<LoginPage/>} /> */}

            <Route path="/*" element={<AtomoRoutes />} />
       </Routes>
    </>
  )
}
