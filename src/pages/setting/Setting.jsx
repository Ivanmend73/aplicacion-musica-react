import React, { useContext, useState } from 'react';
//img
import foxbelMusic from "../../images/foxbel-music.png"
// sass
import "./setting.scss"
// react-router-dom
import {Link} from "react-router-dom";
//Context
import { Context } from "../../context/context"
//axios
import axios from "axios";


const Setting = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, dispatch } = useContext(Context);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({ type:"UPDATE_START"});
    const updatedUser = {
      userId: user._id,
      nombre,
      apellido,
      numero,
      genero,
      email,
      password
    };
      try {
        const res = await axios.put(`/users/${user._id}`, updatedUser);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        alert("Acabas de actualizartue cuenta")
      } catch(err) {
        dispatch({ type: "UPDATE_FAILURE" })
        console.log("error en el codigo")
      }
  }


  return (
    <div className='setting'>
      <div className='content_setting'>
        <div className='setting_tittle'>
          <Link to="/">
            <img className='img_setting' src={foxbelMusic} />
          </Link>
          <span className='update_span'>Actualiza tu cuenta</span>
          <span className='delete_span'>Elimina tu cuenta</span>
        </div>
        <form className='form_setting' onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input 
            type="text" 
            placeholder={user.nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
          <label>Apellido</label>
          <input 
            type="text" 
            placeholder={user.apellido}
            onChange={(e)=> setApellido(e.target.value)}
            />
          <label>Numero</label>
          <input 
            type="text" 
            placeholder={user.numero}
            onChange={(e)=> setNumero(e.target.value)}
            />
          <label>Genero</label>
          <input 
            type="text" 
            placeholder={user.genero}
            onChange={(e)=> setGenero(e.target.value)}
            />
          <label>Correo Electronico</label>
          <input 
            type="email" 
            placeholder={user.email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          <label>Contraseña</label>
          <input 
            type="password" 
            placeholder='Contraseña'
            onChange={(e)=>setPassword(e.target.value)}
          />
          <div className='setting_button'>
            <button type="submit">Actualizar</button>
          </div>
        </form>
        <span>hello world</span>
      </div>


    </div>
  )
}

export default Setting