import "./navbar.css";
import React from 'react';
import {Link,NavLink } from 'react-router-dom';
import Logo from "../images/logo.png";
import {links} from '../data';
import {GoThreeBars} from 'react-icons/go';
import { useState } from "react";
import {AiFillCloseCircle} from 'react-icons/ai';

const Navbar = () => {

    const [isNavShowing,setIsNavShowing] = useState(true)
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt ="logo"/>
            </Link>
            <ul className={`nav_links ${isNavShowing?'show__nav':'hide__nav'}`}>
                {
                    links.map(({name,path},index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=>isActive? 'active-nav':" "} onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
                {
                    isNavShowing?<AiFillCloseCircle/>:<GoThreeBars/>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar