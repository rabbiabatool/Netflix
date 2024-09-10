import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TvShow from './pages/TvShow';
import List from './pages/List';

export  default function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/n" element={<Netflix />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/TvShow" element={<TvShow />} />
          <Route exact path="/myList" element={<List />} />
          


        </Routes>
      </BrowserRouter>
  );


}

