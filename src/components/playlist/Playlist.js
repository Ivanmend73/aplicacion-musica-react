import React from 'react';
import "./playlist.scss"

const Playlist = () => {
  return (
    <div className='container_playlist'>
        <div className='playlist_content'>
            <div className='content_img'>
                <img className='img_playlist' src="https://static2.mujerhoy.com/www/multimedia/201711/18/media/cortadas/shakira.jpg" alt="artista"/>
            </div>
            <div className='content_info'>
                <h2>a-ha - TAKE ON ME</h2>
                <span>Lo mejor de a-ha - 948,960 seguidores</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <div className='content_button_playlist'>
                    <button className='btn1'>Reproducir</button>
                    <button className='btn2'>Seguir</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playlist