import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectedGenre from '../components/SelectedGenre';

export  default function TvShow() {
    const [isScrolled,setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
    const movies = useSelector((state)=>state.netflix.movies);
    const genres = useSelector((state)=>state.netflix.genres);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenres());
    },[dispatch]);

    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type:"tv"}));
    },[dispatch,genresLoaded]);

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0? false:true);
        return () =>(window.onscroll=null);
    };

    return(
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectedGenre genres={genres} type="tv" />
                {
                    movies.length?<Slider movies={movies}/> :<NotAvailable />
                }

            </div>

        </Container>

    );
}

const Container=styled.div`
  .data{
    margin-top:8rem;
    .not-available{
      text-align:center;
      color:white;
      margin-top:4rem;
    }
  }
`;