import React,{ useContext } from 'react';
import './App.css';
import Login from './pages/login/Login';
import MainPage from './pages/mainpage/MainPage';
import Setting from './pages/setting/Setting';
import Register from './pages/register/Register';
//react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from './context/context';
import Audio from "../src/components/audio/Audio"

function App() {
  const { user } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={user ?<MainPage/> :<Login/> }/>
          <Route path="/register" element={user ? <MainPage/> : <Register/>}/>
          <Route path='/settings' element={user ? <Setting/> :<Setting/>} />
          <Route path="/audio" element={<Audio/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
