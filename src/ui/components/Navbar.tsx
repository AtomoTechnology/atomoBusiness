import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
const navigate = useNavigate();
const onLogout = () =>{
    navigate('/login',{
        replace:true
    });
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand  p-2  col-2" 
                to="/"
            >
                Atomo Tecnology
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
            <div className="navbar-collapse justify-content-center" id="navbarSupportedContent">
                <div className="navbar-nav col-8">

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

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto right">
                        <button 
                            className='nav-item nav-link btn'
                            onClick={onLogout}
                        >
                            Login
                        </button>
                    </ul>
                </div>
                
            </div>
        </nav>        
    )
}