
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Noticia from './components/Noticia';
import Header from './components/Header';
import getApi from './Api.js'

function App() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {

    getApi('noticias/')
      .then((data) => data.json())
      .then((res)=>setNoticias(res))
  }, []);

   return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/reactPortalDanki/noticias/:slug" element={<Noticia/>} />
          <Route path="/reactPortalDanki/" element={<Home noticias={noticias} />} />
        </Routes>
    </Router>
  );
}

export default App;
