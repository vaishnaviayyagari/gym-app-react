import React from 'react';
import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo nostrum at rem eligendi voluptatum modi necessitatibus incidunt 
      voluptatibus id dolorum, quisquam error laborum ad nihil veritatis voluptatem,
       ullam minus praesentium eveniet sequi, reiciendis in. Expedita harum ducimus impedit saepe.
      </Header>
      <section className="contact">
          <div className="container contact__container">
            <div className="contact__wrapper">
              <a href='mailto:test@gmail.com' target='_blank' rel="noreferrer noopener"><MdEmail/></a>
              <a href='http://faceboook.com' target='_blank' rel="noreferrer noopener"><BsMessenger/></a>
              <a href='https://wa.me/+919999999999' target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp/></a>
            </div>
          </div>
      </section>
      </>
  )
}

export default Contact