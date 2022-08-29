import React, { useState, useCallback, useEffect } from 'react';
import AudioPlayer from '../../components/audioPlayer/AudioPlayer';
import Category from '../../components/category/Category';
import ListMusics from '../../components/listmusics/ListMusics';
import Navbar from '../../components/navbar/Navbar';
import Playlist from '../../components/playlist/Playlist';
import Audio from '../../components/audio/Audio';
import "./mainPage.scss";
//axios
import axios from "axios";


const MainPage = () => {

  const [characters, setCharacters] = useState(null);
  const [characterSearch, setCharacterSearch] = useState('');

  const getCharacters = useCallback(async()=>{
    if(characterSearch !== "") {
      await axios
        .get(`/music/?query=${characterSearch}`)
        .then(({ data }) => setCharacters(data.personajes))
    } else {
      await axios("/music")
      .then(({data}) => setCharacters(data))
    }
  }, [characterSearch]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);


  return (
    <div className='container-mainPage'>
        <Category/>
        <div className='container_main'>
          <Navbar/>
          <Playlist/>
          <ListMusics characters={characters} />
          <AudioPlayer/>
        </div>
    </div>
  )
}

export default MainPage