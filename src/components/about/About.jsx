
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ME from '../../assets/da1.jpg'
import './About.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="about image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              
            <i className="fas fa-check"></i>

              <h5 >Experience</h5>
              <small> 4th year Software Engineering Student</small>
            </article>

            <article className='about_card'>
            <i className="fas fa-check"></i>

              <h5 >Experience</h5>
              <small>3 Month Internship At ASTU</small>
            </article>

            <article className='about_card'>
            <i className="fas fa-check"></i>
              <h5 >Experience</h5>
              <small>1+ video Editing Exprience</small>
            </article>
          </div>

          <p>
Passionate about technology and innovation, I am on the verge of completing my software engineering studies. Eager to contribute to the forefront of software development, I am drawn to dynamic companies that value hard work and innovation. Embracing challenges, I look forward to collaborating on projects spanning machine learning, mobile applications, website development, and real problem-solving systems. My academic journey has provided a robust foundation in software engineering principles, with a particular interest in embedded systems. Crafting efficient solutions that seamlessly integrate software and hardware motivates me. As I enter the professional arena, I am excited to apply my expertise, collaborate with diverse teams, and contribute to meaningful projects, ready to make my mark on the limitless canvas of possibilities in software engineering.</p>
              <a href='#contact' className='btn btn-primary'>Let Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About