// eslint-disable-next-line no-unused-vars
import React from 'react'
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/admindashboard.png';
import IMG3 from '../../assets/portfolio14.png';
import IMG4 from '../../assets/facialexpression.png';
import IMG5 from '../../assets/portfolio7.png';
import IMG6 from '../../assets/portfolio6.png';
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub} from '@fortawesome/free-brands-svg-icons';


const data=[
  // {
  //   id:1,
  //   image:IMG1,
  //   description:'',
  //   title:'Simple Calculator',
  //   github:'https://gitHUb.com/danielkeb/tutorial-App-/calcApp/calculator',
    
  // },
  {
    id:2,
    image:IMG2,
    description:'The GETPC-MS (get pc managment system) project is a developed by Laravel frame work, system designed for university community to streamline PC registration and management. The system incorporates features for barcode and QR code generation, along with pc owners identification.',
    title:'GETPCMS Intern Project',
    github:'https://github.com/danielkeb/Intern_project',
    
  },
  {
    id:3,
    image:IMG3,
    description:'Welcome to the Django Customer Record Managment Project! This project focuses on building a robust API with CRUD operations using the Django framework. The goal is to create an efficient and scalable API that interacts seamlessly with database.',
    title:'Django Customer Record Management',
    github:'https://github.com/danielkeb/django_restapi_development',
   
  },
  {
    id:4,
    image:IMG4,
    description:'This project utilizes machine learning, TensorFlow, and MediaPipe to recommend music based on facial expressions. The goal is to create a unique and personalized music recommendation experience by analyzing the users emotions through their facial expressions.',
    title:'Emotion based music recommendation',
    github:'https://github.com/danielkeb/emoton-based-',
   
  },
  {
    id:5,
    image:IMG5,
    description:'Abune Gorgorios School Management System is a comprehensive and user-friendly platform designed to streamline and enhance the management and administration of educational institutions. This system provides a range of features to facilitate efficient communication, data management, and academic operations within the school.',
    title:'AGSMS as Saas',
    github:'https://github.com/danielkeb/Abune_Gorgoriwos_school_maangement_system',
    
  },
  {
    id:6,
    image:IMG6,
    description:'The Python Pong game typically involves two paddles and a ball moving back and forth on a screen. The players control the paddles and aim to hit the ball, preventing it from passing through their side of the screen. Each successful hit earns a point, and the game continues until one player reaches high score. The code is inside day22 folder',
    title:'Pong Game',
    github:'https://gitHUb.com/danielkeb/pythonchallenge',
    
  },

]
const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5 >what  Recent Work   </h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">{
   data.map(({id,description,title,github})=>{
    return(
      <article  key={id} className="portfolio_items">
      <div className='portfolio_item-description'>
      
      <h2>{title}</h2>
      <p>{description}</p>
      
      </div>
      <br/>
     
      <div className='portfolio_item-cta'>
      <a href={github} className='btn ' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      

      </div>
    </article>
    )
   })
   }
      </div>
      </section>
       
  )
}

export default Portfolio