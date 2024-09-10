import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import background from "../assets/home.jpg";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
// import './App.css'

export  default function Netflix() {
    const [isScrolled,setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
    const movies = useSelector((state)=>state.netflix.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenres());
    },[dispatch]);

    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type:"all"}));
    },[dispatch,genresLoaded]);




    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0? false:true);
        return () =>(window.onscroll=null);
    };
  
    return <Container>

        <Navbar isScrolled={isScrolled} />
        <div className="hero">
            <img src={background} alt="" />
            <div className="container flex column j-center">
                <div className="logo">
                    <div className="l1 flex a-center" style={{ gap: "5px" }}>
                        <p style={{ fontSize: "55px", textTransform: "uppercase", color: "#e50914", fontWeight: "600" }} >N</p>
                        <p style={{ fontSize: "30px", textTransform: "uppercase", fontWeight: "300" }}>Series</p>
                    </div>
                    <h1 style={{ fontSize: "65px", fontWeight: "700" }}>STRANGER THINGS</h1>
                </div>

                <div className="buttons flex">
                    <div className="box flex a-center">
                        <FaPlay />
                        <p>Play</p>

                    </div>
                    <div className="box flex a-center">
                        <AiOutlineInfoCircle />
                        <p>Play</p>

                    </div>

                </div>

            </div>
        </div>
        {/* <div className="hero">
            <img src={background} alt="" className='background-image' style={{width:"100%"}} />
            <div className="container">
                <div className="logo">
                    <div className="l1 flex a-center" style={{gap:"5px"}}>
                        <p style={{fontSize:"55px",textTransform:"uppercase",color:"#e50914",fontWeight:"600"}} >N</p>
                        <p style={{fontSize:"30px",textTransform:"uppercase",fontWeight:"300"}}>Series</p>
                    </div>
                    <h1 style={{fontSize:"65px",fontWeight:"700"}}>STRANGER THINGS</h1>
                </div>
                <div className="buttons flex">
                    <button className="flex j-center a-center" onClick={()=>navigate('/player')}>
                        <FaPlay /> Play
                    </button>
                    <button className="flex j-center a-center">
                        <AiOutlineInfoCircle /> More Info
                    </button>
                </div>
            </div>
        </div> */}
        <Slider movies={movies} />
    </Container>


}
const Container = styled.div`

    .hero{
      position:relative;
    //   margin-bottom:40rem;
      img{
        width:100vw;
        height:100vh;
        // object-fit:cover;
        // position:absolute;
        // top:0;
        // z-index:1;
      }
       .container{
            position:absolute;
            top:10rem;
            z-index:4;
            .logo{
                height:100%;
                width:100%;
                margin-left:5rem;
            }
            .buttons{
              margin-left:5rem;
              margin-top:3rem;
              gap:2rem;
              .box{
                padding:0.5rem 2rem;
                gap:1rem;
                font-size:1.5rem;
                background-color:white;
                color:black;
                border-radius:4px;
                &:hover{
                  background-color:#b8b8b8;
                }
                p{
                  font-weight:500;
                }
              }
            }
        }
    }
    // .hero{
    //     position:relative;
    //     .background-image{
    //         filter:brightness(60%);
    //     }
    //     img{
    //         height:100vh;
    //         width:100vw;
    //     }
    //     .container{
    //         position:absolute;
    //         bottom:5rem;
    //         .logo{
    //             height:100%;
    //             width:100%;
    //             margin-left:5rem;
    //         }
    //         .buttons{
    //             margin:5rem;
    //             gap:2rem;
    //             button{
    //                 font-size:1.4rem;
    //                 gap:1rem;
    //                 border-radius:0.2rem;
    //                 padding:0.5rem;
    //                 padding-left:2rem;
    //                 padding-right:2.4rem;
    //                 border:none;
    //                 cursor:pointer;
    //                 transition:0.3s ease-in-out;
    //                 &:hover{
    //                     opacity:0.8;
    //                 }
    //                 &:nth-of-type(2) {
    //                     background-color:rgba(109,109,110,0.7);
    //                     color:white;
    //                     svg{
    //                         font-size:1.8rem;
    //                     }
    //                 }
                    
    //             }
    //         }
    //     }
    // }
`;
