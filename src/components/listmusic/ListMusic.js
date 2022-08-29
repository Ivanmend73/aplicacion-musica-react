import React,{useState} from 'react';
import "./listmusic.scss"

const ListMusic = () => {

    const [heart, setHeart] = useState(false);

    const onclickHeart = () => {
        setHeart(!heart)
    }

  return (
    <div className='container_listmusic'>
        <div className='content'>
            <img src="https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg" alt="music"/>
            <div className='content_info_music'>
                <div className='main_info_music'>
                    <h5>Take on me</h5>
                    <p>a-ha</p>
                </div>
                <div className='content_like' onClick={onclickHeart}>
                    <i class="fa-solid fa-heart" style={{ color:heart ? "red" : "#8888" }}></i>
                </div>
            </div>
            <span className='list_play'><i class="fa-solid fa-play"></i></span>
        </div>
    </div>
  )
}

export default ListMusic