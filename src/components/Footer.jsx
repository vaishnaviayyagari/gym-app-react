import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import {ImLinkedin} from 'react-icons/im';
import {AiFillFacebook,AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt='logo'/>
                </Link>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aliquid recusandae praesentium repellendus tenetur repudiandae qui, accusantium perferendis eius libero!
                </p>
                <div className="footer__socials">
                    <a href='https://linkedin.com' target='_blank' rel='noreferrer noopener'><ImLinkedin/></a>
                    <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'><AiFillFacebook/></a>
                    <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='#'>Blog</Link>
                <Link to='#'>Case Studies</Link>
                <Link to='#'>Events</Link>
                <Link to='#'>Communities</Link>
                <Link to='#'>FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='#'>Contact Us</Link>
                <Link to='#'>Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 Vaishnavi Practice @copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer