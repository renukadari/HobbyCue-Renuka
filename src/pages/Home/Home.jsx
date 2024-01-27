import React from 'react';
import "./Home.css";
import Header from '../../components/Header/Header';
import SignIn from '../../components/SignIn/SignIn';


const Home = () => {
  return (
    <div className='' id='home'>
    <Header/>
    <SignIn/>
    </div>
  )
}

export default Home;
