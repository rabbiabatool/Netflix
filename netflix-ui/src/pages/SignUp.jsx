import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Background from '../components/Background';
import Header from '../components/Header';
import { createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../uts/firebase-config';
import { useNavigate } from 'react-router-dom';
import tv from "../assets/tv.jpg"
import Footer from '../components/Footer';
import Trending from '../components/Trending';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store';
import Join from '../components/Join';
// import './App.css'

export  default function SignUp() {
    const [showpassword,setPassword] =useState(false);
    const [isBox , setBox] = useState(false);
    const Navigate = useNavigate();
    const [formValues,setFormValues] =useState({
        email:"",
        password:"",
    });

    const movies = useSelector((state)=>state.netflix.movies);

    const dispatch = useDispatch();

    // console.log(movies);

    useEffect(()=>{
        dispatch(fetchMovies({type:"movie"}));
    },[dispatch]);

    const handleSignIn = async () =>{
    
        try {
            const {email,password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email,password)

        }
        catch (err) {
            console.log(err);
            alert(err);

        }

        onAuthStateChanged(firebaseAuth,(currentUser)=>{
            if(currentUser){Navigate("/n");}
        });
    };

    const toggle_fun = () =>{

        setBox(true);
        
    }


    return <Container>
        <Background />
        <div className="content">
            <Header login />
            <div className="body flex column a-center j-center">
                <div className="text flex column">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h4>Watch anywhere. Cancel anytime</h4>
                    <h6>Ready to watch? Enter your email to create or restart membership</h6>
                </div>
                <div className="form">
                    <input type="email" placeholder="Email  Address" name='email'
                        value={formValues.email} onChange={(e)=>setFormValues({ ...formValues,[e.target.name]:e.target.value})} />
                    {
                        showpassword && (<input type="password" placeholder="Password" name='password'
                            value={formValues.password} onChange={(e)=>setFormValues({ ...formValues,[e.target.name]:e.target.value})} />)
                    }
                    {
                        !showpassword && (<button onClick={()=>setPassword(true)}>Get Started</button>)
                    }
                </div>
                <button onClick={handleSignIn}>Sign Up</button>
            </div>
            
            <div className="curve"></div>
            
            <div className="section-1 flex j-center a-center">
                <div className="headings">

                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation</p>
                    <p>Chromecast, Apple TV, Blu-ray</p>
                    <p>players, and more.</p>
                </div>
                <img src={tv} alt="" />
            </div>
            <hr style={{height:"10px", background:"gray"}} />
            <div className="question flex column a-center">
                <h1>Frequently asked questions</h1>
                <div className="container-1">

                    <div className="container-2 flex column">
                        <div className="box flex j-between">
                            <p>What is netflix?</p>
                            {!isBox?<i className="fa fa-plus" onClick={toggle_fun}></i>:<i onClick={()=>{setBox(false)}} className='fa fa-close'></i>}
                        </div>
                        {isBox===true?<div className="hidden-box open close">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            </p>
                            <p>You can watch as much as you want, whenever you want without a single commercial. all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
        
                        </div>:<></>}
                    </div>
                </div>
            </div>
            <Join />
            <Trending movies={movies.slice(0,10)} />
            <Footer />

        </div>
    </Container>


}

const Container = styled.div`
    position:relative;

   
    .content{
        position: absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.5);
        height:100vh;
        width:100vw;
        display:grid;
        grid-template-rows:15vh 85vh;
        .body{
            gap:1rem;
            .text{
                gap:1rem;
                text-align:center;
                font-size:1rem;
                h1{
                    padding:0 25rem;
                }
            }
            .form{
                display:grid;
                grid-template-columns:${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};
                width:60%;
                input{
                    color:black;
                    border:none;
                    padding:1.2rem;
                    font-size:1.2rem;
                    border: 1px solid black;
                    &:focus{
                        outline:none;
                    }
                }
                button{
                    padding:0.5rem 1rem;
                    background-color: #e50914;
                    border:none;
                    cursor:pointer;
                    color:white;
                    font-weight:bolder;
                    font-size:1.05rem;
                }
            }
            button{
                    padding:0.5rem 1rem;
                    background-color: #e50914;
                    border:none;
                    cursor:pointer;
                    color:white;
                    font-weight:bolder;
                    font-size:1.05rem;
            }
        }
        .section-1{
            padding:130px;
            gap:10px;
            .headings{

                flex:1;
                h1{
                    font-size:3rem;
                    margin-bottom:20px;
                }
                p{
                    font-weight:300;
                    line-height:1;
                    font-size:1.5rem;
                }
            }
            img{
                flex:1;
                width:400px;
                margin-left:90px;
            }
        }
        .question{
            padding:100px;
        }
        .container-1{
            .container-2{
                gap:0.2rem;

                .box{
                    width:700px;
                    // border:1px solid white;
                    margin-top:30px;
                    padding:30px;
                    height:100%;
                    background-color:#2e2e2e;
                }
                .hidden-box{
                    width:700px;
                    // border:1px solid white;
                    padding:30px;
                    height:100%;
                    background-color:#2e2e2e;
                }
            }
        }
    }


  .curve {
    width: 100vw;
    height: 5px;
    // background: radial-gradient(circle, #ff0000 30%, #ff9999 50%);
    background: radial-gradient(circle, 
      rgba(255, 0, 0, 1) 0%,         /* Deep red at the center */
      rgba(255, 0, 0, 0.5) 40%,     /* Red with 50% opacity */
      rgba(255, 0, 0, 0.1) 70%,     /* Lighter red with 10% opacity */
      rgba(255, 0, 0, 0) 100%       /* Fully transparent at the edges */
    );
    border-radius: 50% 50% 0 0;
    box-shadow: 0 40px 40px rgb(0, 150, 255);
   }

   
`;