import React,{useState} from 'react';
import foxbelMusic  from "../../images/foxbel-music.png";
import "./register.scss"
//react-router-dom
import {Link} from "react-router-dom";
//axios
import axios from 'axios';

const Register = () => {
  //const [username, setUsername] = useState('');
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        nombre,
        apellido,
        numero,
        genero,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
    <div className='content_register'>
      <Link to="/">
        <img src={foxbelMusic} className="logo_register" alt="logo"/>
      </Link>
      <Link to="/login">
          Login
      </Link>
    </div>
    <div className='container_register' id="container_registerr">
        <h2 className='titulo_register'>Registrate Gratis y empieza <br/> a Escuchar</h2>
        <form className='form_register' onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
              type="text" 
              placeholder='Ingrese su nombre'
              onChange={(e)=>setNombre(e.target.value)}
              />
            <label>Apellido</label>
            <input 
              type="text" 
              placeholder='Ingrese su apellido'
              onChange={(e)=>setApellido(e.target.value)}
              />
            <label>Número</label>
            <input 
              type="text" 
              placeholder='Ingrese su número'
              onChange={(e)=>setNumero(e.target.value)}
              />
            <label>Género</label>
            <input 
              type="text" 
              placeholder='Género'
              onChange={(e)=>setGenero(e.target.value)}
              />
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder='Ingrese su correo Electrónico'
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder='Ingrese su contraseña'
              onChange={(e)=>setPassword(e.target.value)}
              />
            <div className='content-register'>
                <button type="submit">Registrarse</button>
                {error && <span style={{color:"red", marginTop: "10px", fontSize: "15px"}}>Error en el registro</span> }
            </div>
        </form>
    </div>
    </>
  )
}

export default Register