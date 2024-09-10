import React, { memo, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchMovies } from "../store";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Card from "./Card";
import { useDispatch } from "react-redux";

const Trending = memo(({ movies }) => {
    // const [types,setType] =useState("movies");
    // const movies = useSelector((state)=>state.netflix.movies);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(fetchMovies({type:"movie"}));
    // });

    const changeHandler=(e)=>{
        dispatch(fetchMovies({type:e.target.value}));
    }

    const [slider,setSlider] = useState(0);
    const listRef = useRef();

    // const getMoviesFromRange=(from,to)=>{
    //     return movies.slice(from , to);
    // }

    const directionHandler=(direction)=>{

        if (listRef.current) {
            const slideWidth = 230;
            let newSlider;
    
            if (direction === "left" && slider > 0) {
                newSlider = slider - 1;
            } else if (direction === "right" && slider < 4) {
                newSlider = slider + 1;
            } else {
                console.log("out");
                return; // No action needed if out of bounds
            }
    
            setSlider(newSlider); // Update state first
    
            const newTranslateX = -newSlider * slideWidth;
            listRef.current.style.transform = `translateX(${newTranslateX}px)`;
        }
    };
    return(
        <Container>
            <h1>Trending Now</h1>
            <select onChange={changeHandler} defaultValue="movie">
                <option value="movie">Movies</option>
                <option value="tv">Tv Show</option>
            </select>

            <div className="movies_display">
                <div className="left">
                    <AiOutlineArrowLeft onClick={()=>directionHandler("left")}  />

                </div>
                <div className="data" ref={listRef}>

                  
                     {movies.map((movie, index) => {
                        return <Card movieData={movie} index={index} key={movie.id} />
                    })}
                    

                </div>
                <div className="right">
                    <AiOutlineArrowRight onClick={()=>directionHandler("right")}  />

                </div>
            </div>

        </Container>

    );
});

export default Trending;

const Container = styled.div`

   width:75%;
   margin:auto;
   margin-bottom:170px;
   select{
     margin-top:1rem;
     padding:0.3rem;
   }
   
   
   .movies_display{
      margin-top:2rem;
      position:relative;
      overflow:hidden;
      width:1000px;
    
     .data{
        
        display:flex;
        width:max-content;
        gap:1rem;
        margin-left:30px;
        transform:translateX(0px);
        transition:transform 0.3s ease-in-out;

    
     }
     .left{
       position:absolute;
       display:flex;
       align-items:center;
       justify-content:center;
       height:70%;
       width:20px;
       z-index:99;
       cursor:pointer;
       left:0;
       top:0;
       bottom:0;
       background-color:grey;
       border-radius:4px;
     }
     .right{
        position:absolute;
       display:flex;
       align-items:center;
       justify-content:center;
       height:70%;
       width:20px;
       z-index:99;
       cursor:pointer;
       right:0;
       top:0px;
       bottom:0;
       background-color:grey;
       border-radius:4px;
     }

  }

`;

