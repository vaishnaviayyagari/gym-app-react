import React from 'react';
import "../pages/home/home.css";
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png'
const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100 Days of Workout</h4>
          <h1>Join the legends of the fitness World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum cumque doloribus ipsa aliquam autem amet?
          </p>
          <Link to='/plans' className='lg btn'>Get started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">    
            <img src={Image} alt = "main header"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader