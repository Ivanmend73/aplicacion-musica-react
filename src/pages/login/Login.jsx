import React, { useContext, useRef } from 'react';
import foxbelmusic from "../../images/foxbel-music.png";
import "./login.scss";
// react-router-dom
import {Link} from "react-router-dom";
// axios
import axios from "axios";
import { Context } from '../../context/context';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {  dispatch, isFetching } = useContext(Context);

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login",{
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        }catch(err) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    }

    console.log(isFetching)

  return (
    <>
        <div className='content_second'>
            <Link to="/">
                <img src={ foxbelmusic } className="img_login" alt="logo"/>
            </Link>
            <Link to="/register" className='link'>Register</Link>
        </div>
        <div className='container_login'>
            <h2 className='titulo_login'>Login</h2>
            <form className='form_login' onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Ingrese su email"
                    ref={emailRef}
                />
                <label>Contraseña</label>
                <input 
                    type="password" 
                    placeholder='Ingrese su contraseña'
                    ref={passwordRef}
                />
                <div className='content_login'>
                    <button 
                        style={{color:isFetching && "#eee", cursor:isFetching ? "pointer": "default", backgroundColor: isFetching? "coral": "#d24d4d"}}
                        className='loginButton'
                        type="submit"
                        disabled={isFetching}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login