import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {

    return(
        <Container>
            <p>Ready to watch? Enter your email to 
                create or restart your 
                membership.</p>
            <div className="email flex a-center">
                <div className="input-div">
                    <p>Email Address</p>
                  <input type="text" placeholder="" />
                </div>
                <button className="flex">
                    <h3>Get Started</h3>
                    <AiOutlineArrowRight />
                </button>
            </div>

            <p className="linked"><Link to="/" style={{color:"white"}}>Questions?Contact US</Link></p>

            <div className="container">
                <div className="box">
                    <p><Link to="/" style={{color:"white"}}>FAQ</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Investor Relations</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Privacy</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Speed Test</Link></p>

                </div>
                <div className="box">
                    <p><Link to="/" style={{color:"white"}}>FAQ</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Investor Relations</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Privacy</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Speed Test</Link></p>

                </div>
                <div className="box">
                    <p><Link to="/" style={{color:"white"}}>FAQ</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Investor Relations</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Privacy</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Speed Test</Link></p>

                </div>
                <div className="box">
                    <p><Link to="/" style={{color:"white"}}>FAQ</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Investor Relations</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Privacy</Link></p>
                    <p><Link to="/" style={{color:"white"}}>Speed Test</Link></p>

                </div>
            </div>

            <select className="selection">
                <option value="English">English</option>
            </select>

            <p className="last">Netflix Pakistan</p>
        </Container>


    );
     

}

const Container=styled.div`
   width:75%;
   margin:auto;
   padding-bottom:5rem;
   display:flex;
   flex-direction:column;
   gap:1rem;
   p{
      font-size:1rem;

   }
   .email{
      gap:0.2rem;
      button{
        gap:1rem;
        background-color:#FF0000;
        height:55px;
        font-size:1rem;
        width:200px;
        padding:10px 15px;
        cursor:pointer;
        align-items:center;
        justify-content:center;
        h3{
          color:white;
        }
        svg{
         color:white;
        }
        &:hover{
          background-color:#8B0000;
        }
      }
   }
   .input-div{
     border:2px solid white;
     width:700px;
     height:58px;
     border-radius:6px;
     padding:6px 15px;
     background-color:#001F3F;
     input{
        height:30px;
        width:100%;
        border:none;
        outline:none;
        padding-left:6px;
        background-color:transparent;
        color:white;
        font-size:1rem;
     }
     p{
        font-size:0.8rem;
        color:#7d7d7d;
        padding-left:6px;
     }
   }
   .container{
     display:grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     .box{
       margin-top:2rem;
       margin-bottom:2rem;
       margin-left:1rem;
       p{
         margin-bottom: 0.7rem;
         color:#7d7d7d;
       }
     }
   }
   .linked{
     margin-left:1rem;
     color:#7d7d7d;
   }
   .selection{
     margin-left:1rem;
     width:120px;
     color:white;
     background-color:#696969;
     padding:0.2rem;
   }
   .last{
     margin-left:1rem;
   }
    
   

`;