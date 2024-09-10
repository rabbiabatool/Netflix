import React from "react";
import styled from "styled-components";
import card from "../assets/card.jpg";
import looking from "../assets/looking.jpg";
import arrow from "../assets/pink_arrow.jpg";
import tv from "../assets/pink_tv.jpg";


export default function Join(){
    return(
        <Container className="flex column">
            <h1>More Reasons to Join</h1>

            <div className="container">
                <div className="box">
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <img src={tv} alt="" />
                </div>

                <div className="box">
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <img src={arrow} alt="" />
                </div>

                <div className="box">
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <img src={looking} alt="" />
                </div>
                <div className="box">
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <img src={card} alt="" />
                </div>
            </div>


        </Container>

    );
}

const Container = styled.div`
  width:75%;
  margin:auto;
  margin-bottom:170px;
  gap:1rem;
  .container{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:2rem;
    font-size:1.5rem;
    .box{
        position:relative;
        padding-top:20px;
        padding-left:15px;
        padding-right:15px;
        padding-bottom:100px;
        background-color:#4B0082;
        border-radius:10px;
        width:230px;
        height:330px;

        h1{
          font-size:1.5rem;
          margin-bottom:1rem;
        }
        p{
          color:#e2e2e2;
          font-size:1rem;
        }
        img{
          position:absolute;
          bottom:20px;
          right:10px;
          width:50px;
          height:50px;
        }
    }
  }

  

`;

