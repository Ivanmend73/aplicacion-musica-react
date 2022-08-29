import React, { useContext } from 'react';
import "./navbar.scss";
// react-router-dom
import { Link } from "react-router-dom";
import { Context } from '../../context/context';

const Navbar = () => {

    const toggleMenu = () => {
        console.log("hello world")
    }


    //context logout
    const { user,dispatch } = useContext(Context);
    const handlelogout = () => {
         dispatch({ type: "LOGOUT" })
    }

  return (
    <nav className='container-navbar'>
        <div className='navbar_search'>
            <input className='search_music' type="text" placeholder='Buscar....'/>
            <span>
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
        <div className='menu'>
            {user ? (<>  
                <div className='user-icon'><i class="fa-solid fa-user"></i></div>
                <p className='user-name'>{user.nombre}</p>
                <div className='content_perfil'>
                    <div className='music_like'>
                        <i class="fa-solid fa-music"></i>
                        <span className='cant_like'>3</span>
                    </div>
                    <Link to="/settings" style={{}}>Setting</Link>
                    <div style={{cursor:"pointer"}} onClick={handlelogout}>Logout</div>
                </div>
                </>
                ): 
                    (   
                        <>
                        <Link to="/register" className='link' style={{marginRight: "5px"}}>Register</Link>
                        <Link to="/login" className='link'>Login</Link>
                    </>
                    )
            }
            
            <div className='bar-icon' onClick={toggleMenu}><i class="fa-solid fa-bars iconuser"></i></div>
        </div>
    </nav>
  )
}

export default Navbar