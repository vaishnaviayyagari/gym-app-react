import React from 'react';
import Header from '../../components/Header';
import './about.css';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit necessitatibus perferendis recusandae beatae? Quos architecto, amet praesentium accusamus cupiditate alias!
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">                  
          <div className="about__section-image">
            <img src={StoryImage} alt ="Story"/>
          </div>
          <div className="about__section-content">
            <h1>Our story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error dicta reprehenderit cum deserunt officia ex doloremque accusantium nemo cumque pariatur autem voluptatum fugit dolor saepe quo totam nihil nesciunt,
               sit vitae. Perferendis aut itaque excepturi laudantium dolores quas mollitia quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur rem perspiciatis harum illo dolores quo fugit, 
              reiciendis nesciunt qui earum fuga quidem sequi, est veniam ducimus distinctio maiores eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi accusamus cupiditate obcaecati delectus id veniam maiores enim nostrum molestias commodi.
            </p>
          </div>
        </div>
      </section>

      <section className='about__Vision'>
        <div className="container about__vision-container">                  
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error dicta reprehenderit cum deserunt officia ex doloremque accusantium nemo cumque pariatur autem voluptatum fugit dolor saepe quo totam nihil nesciunt,
               sit vitae. Perferendis aut itaque excepturi laudantium dolores quas mollitia quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur rem perspiciatis harum illo dolores quo fugit, 
              reiciendis nesciunt qui earum fuga quidem sequi, est veniam ducimus distinctio maiores eius.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt ="Story"/>
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className="container about__mission-container">                  
          <div className="about__section-image">
            <img src={MissionImage} alt ="Mission"/>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error dicta reprehenderit cum deserunt officia ex doloremque accusantium nemo cumque pariatur autem voluptatum fugit dolor saepe quo totam nihil nesciunt,
               sit vitae. Perferendis aut itaque excepturi laudantium dolores quas mollitia quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur rem perspiciatis harum illo dolores quo fugit, 
              reiciendis nesciunt qui earum fuga quidem sequi, est veniam ducimus distinctio maiores eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi accusamus cupiditate obcaecati delectus id veniam maiores enim nostrum molestias commodi.
            </p>
          </div>
        </div>
      </section>

    </>
    
  )
}

export default About;