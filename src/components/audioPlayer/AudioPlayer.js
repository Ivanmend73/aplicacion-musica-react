import React from 'react';
// scss
import "./audioPlayer.scss"


const AudioPlayer = () => {
  return (
    <div className='audio_player'>
        <div className='left'>
            <img className='img_left' src="https://educacion30.b-cdn.net/wp-content/uploads/2019/10/music-978x652.jpg" alt="song" />
            <div className='song_info'>
                <p className='song_name'>Peaches</p>
                <p className='song_artist'>Justin Bieber</p>
            </div>
        </div>

        <div className='center'>
            <div className='audio_controls'>
                <div className='prev'>
                    <i class="fa-solid fa-backward-step"></i>
                </div>
                <div className='play'>
                    <i class="fa-solid fa-play"></i>
                </div>
                <div className='next'>
                    <i class="fa-solid fa-forward-step"></i>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='progress_container'>
                <p className='p_center'>0.30</p>
                <div className='content_input'>
                    <input 
                        type="range"
                        step="1"
                        min="0"
                        mac={4}
                        className="progress"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AudioPlayer