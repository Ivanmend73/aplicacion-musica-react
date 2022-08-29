import React, { useContext } from 'react';
import styled from 'styled-components';
import "./category.scss";
// imgagen
import foxbelmusic from "../../images/foxbel-music.png";





const Categorycontent = styled.div`
    
    @media screen and (max-width: 960px) {
        background-color: black;
        position: absolute;
        opacity: 0.5;
        left: -70%;
    }
`;


const Category = () => {

    const toggleMenu = () => {
        console.log('helloe world')
    }


  return (
    <Categorycontent className='container-category' >
        <div className='content-img'>
            <img className='img-logo' src={foxbelmusic} alt="logo" />
            <div className='x-icon' onClick={toggleMenu}><i class="fa-solid fa-x"></i></div>
        </div>

        <div className='cont-list-music'>
            <div className='cont-libreria'>
                <h3>Mi libreria</h3>
                <ul>
                    <li className='li-1'><span className='linea'></span>Recientes</li>
                    <li>Artistas</li>
                    <li>Albuns</li>
                    <li>Canciones</li>
                    <li>Estaciones</li>
                </ul>
            </div>
            <div className='cont-playlist'>
                <h3>Playlist</h3>
                <ul>
                    <li>Metal</li>
                    <li>Para bailar</li>
                    <li>Rock 90s</li>
                    <li>Baladas</li>
                </ul>
            </div>
        </div>

    </Categorycontent>
  )
}

export default Category