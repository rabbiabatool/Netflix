import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { firebaseAuth } from '../uts/firebase-config';
// import './App.css'

export  default function Navbar({isScrolled}) {
    const Links=[
        {name:"Home", link:"/n"},
        {name:"TV Show", link:"/TvShow"},
        {name:"Movies", link:"/movies"},
        {name:"My List", link:"/myList"},
    ];

    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(firebaseAuth);
            navigate("/login"); // Navigate to login after sign-out
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };



    const [showSearch,setShowSearch] = useState(false);
    const [inputHover,setInputHover] = useState(false);

    return <Container>
        <nav className={`flex a-center ${isScrolled?"scrolled":""}`}>
            <h1>Netflix</h1>
            <div className="list">
                <ul className='flex'>
                    {
                        Links.map((links)=>{
                            return(
                                <li key={links.key}><Link to={links.link}>{links.name}</Link></li>
                            )
                        })
                        
                    }
                </ul>
            </div>
            <div className="side flex j-between">
                <div className="search flex">

                    <input type="text" className={`${showSearch?"":"none"}`} placeholder='Search here'
                     onMouseEnter={()=>setInputHover(true)} onMouseLeave={()=>setInputHover(false)}
                     onBlur={()=>{
                        setShowSearch(false);
                        setInputHover(false);
                     }} />

                    <button onFocus={()=>setShowSearch(true)}
                        onBlur={()=>{
                            if(!inputHover) setShowSearch(false)
                        }}>
                       <FaSearch />
                    </button>
                </div>
                <div className="off">

                  <FaPowerOff />
                </div>
            </div>

        </nav>

        {/* <nav className={`flex ${isScrolled?"scrolled":""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <h1 style={{ color: "#e50914", fontSize: "50px", textTransform: "uppercase",fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'  }}>Netflix</h1>
                </div>
                <ul className="links flex">
                    {
                        Links.map(({name,link})=>{
                            return(
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>

                            );
                        })
                    }
                </ul>
            </div>
            <div className="right flex a-center">
                <div className={`search ${showSearch?"show-search":""}`}>
                    <button onFocus={()=>setShowSearch(true)} 
                    onBlur={
                        ()=>{
                            if(!inputHover) setShowSearch(false);
                        }
                    }>
                        <FaSearch />
                    </button>
                    <input type="text" placeholder='search'
                        onMouseEnter={()=>setInputHover(true)}
                        onMouseLeave={()=>setInputHover(false)}
                        onBlur={()=>{
                            setShowSearch(false);
                            setInputHover(false);
                        }}
                    />
                </div>
                <button onClick={handleSignOut}>
                    <FaPowerOff />
                </button>
            </div>
        </nav> */}
    </Container>


}

const Container = styled.div`
    .scrolled{
      background-color:black;
    }
    nav{
      top:0;
    //   gap:20rem;
      padding:0.2rem; 
      height:6.5rem;
      width:100%;
      position:sticky;
      justify-content:space-between;
      position:fixed;
      z-index:5;
    
      h1{
        font-size:1.7rem;
        color:red;
        font-weight:700;
        margin-left:50px;
      }
      ul{
        gap:2rem;
       
        li{
            list-style-type:none;
         a{
          text-decoration:none;
          color:white;
          font-size:1rem;
         }
           
        }
      }
      .side{
        gap:1rem;
        align-items:center;
        margin-right:50px;
        .search{
           gap:0.5rem;
           align-items:center;
           button{
             background-color:transparent;
             svg{
               color:white;
             }
           }
           input{
              border:none;
              outline:none;
              background-color:black;
              padding-left:10px;
              padding:6px;
              color:white;
              border-radius:10px;
              border:1px solid #e2e2e2;
            }
            .none{
                display:none;
            }
    
        }

      }

    }
    // .scrolled{
    //     background-color:black;
    // }
    // nav{
    //     position:sticky;
    //     top:0;
    //     height:6.5rem;
    //     width:100%;
    //     justify-content:space-between;
    //     position:fixed;
    //     z-index:2;
    //     padding:0 4rem;
    //     align-items:center;
    //     transition:0.3s ease-in-out;
    //     .left{
    //         gap:2rem;
    //         .brand{
    //             h1{
    //                 height:4rem;
    //             }
    //         }
    //         .links{
    //             list-style-type:none;
    //             gap:2rem;
    //             li{
    //                 a{
    //                     color:white;
    //                     text-decoration:none;
    //                 }
    //             }
    //         }
    //     }
    //     .right{
    //         gap:1rem;
    //         button{
    //             background-color:transparent;
    //             border:none;
    //             cursor:pointer;
    //             &:focus{
    //                 outline:none;
    //             }
    //             svg{
    //                 color:#f34242;
    //                 font-size:1.2rem;
    //             }
    //         }
    //         .search{
    //             display:flex;
    //             gap:0.4rem;
    //             align-items:center;
    //             justify-content:center;
    //             padding:0.2rem;
    //             padding-left:0.5rem;
    //             button{
    //                 background-color:transparent;
    //                 svg{
    //                     color:white;
    //                 }
    //             }
    //             input{
    //                 width:0;
    //                 opacity:0;
    //                 transition:0.3s ease-in-out;
    //                 background-color:transparent;
    //                 border:none;
    //                 color:white;
    //                 &:focus{
    //                     outline:none;
    //                 }
    //             }
    //         }
    //         .show-search{
    //             border:1px solid white;
    //             background-color:rgba(0,0,0,0.6);
    //             input{
    //                 width:100%;
    //                 opacity:1;
    //                 visibility:visible;
    //                 padding:0.3rem;
    //             }
    //         }
    //     }
    // }
`;