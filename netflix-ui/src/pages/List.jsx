import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { getUserLikedMovies } from '../store';
import Navbar from '../components/Navbar';
// import Slider from '../components/Slider';
// import NotAvailable from '../components/NotAvailable';
// import SelectedGenre from '../components/SelectedGenre';
import Card from '../components/Card';
import { firebaseAuth } from '../uts/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

export default function List(){

    const [isScrolled,setIsScrolled] = useState(false);
    const navigate = useNavigate();
    
    const movies = useSelector((state)=>state.netflix.movies);

    
    const [Email,setEmail] = useState(undefined);
    
    
    const dispatch = useDispatch();
   
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
    //         if (currentUser) {
    //             setEmail(currentUser.email);
    //         } else {
    //             navigate("/login");
    //         }
    //     });

    //     // Cleanup subscription on unmount
    //     return () => unsubscribe();
    // }, []); // Empty dependency array means this effect runs once on mount

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) {
            setEmail(currentUser.email);
        } else {
            navigate("/login");
        }
    });

    useEffect(() => {
        if (Email) {
            dispatch(getUserLikedMovies({ Email }));
           
        }
    }, [Email, dispatch]);
        

    
    

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0? false:true);
        return () =>(window.onscroll=null);
    };
    return(
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="content flex column">
                <h1>My List</h1>
                <div className="grid flex">
                    {console.log(movies)}
                    {
                        movies.map((movie, index) => {
                            return <Card movieData={movie} key={movie.key} index={index} isliked={true} />
                        })
                    }

                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
 .content{
   margin:2.3rem;
   margin-top:8rem;
   gap:3rem;
   h1{
     margin-left:3rem;
   }
   .grid{
     flex-wrap:wrap;
     gap:1rem;
   }
 }
`;