import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
// import './App.css'

export  default function Header(props) {
    const navigate = useNavigate();
    return <Container className='flex a-center j-between'>
        <div className="logo">
            <h1 style={{ color: "#e50914", fontSize: "50px", textTransform: "uppercase",fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'  }}>Netflix</h1>
        </div>
        <button onClick={()=>navigate(props.login?"/login":"/")}>
            {props.login?"Log In" :"Sign In"}
        </button>
    </Container>


}

const Container = styled.div`
    padding:0 4rem;
    .logo{
        h1{
            height:5rem;
        }
    }
    button{
        padding:0.5rem 1rem;
        background-color: #e50914;
        border:none;
        cursor:pointer;
        color:white;
        border-radius:0.2rem;
        font-weight:bolder;
        font-size:1.05rem;
    }
`;