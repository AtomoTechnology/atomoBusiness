import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Footer = () => {
const navigate = useNavigate();
const onLogout = () =>{
    navigate('/login',{
        replace:true
    });
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-bottom">
            
            <Link 
                className="navbar-brand  p-2" 
                to="/"
            >
                Atomo Tecnology
            </Link>

            <div className="navbar-collapse col-8  d-flex justify-content-center">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active': ''}`} 
                        to="/start"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/us"
                    >
                        ¿Quien somos?
                    </NavLink>

                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/client"
                    >
                        Cliente
                    </NavLink>

                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/tecnology"
                    >
                        Tecnologia
                    </NavLink>

                    <NavLink 
                        className={({isActive}) =>`nav-item nav-link ${ isActive ? 'active': ''}`}
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>
               <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-center">
                <ul className="navbar-nav ml-auto">
                <i className="fa-regular"></i>
                </ul>
            </div>
        </nav>
    )
}
