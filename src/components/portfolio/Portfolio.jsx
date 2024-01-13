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
  {
    id:1,
    image:IMG1,
    title:'Simple Calculator',
    github:'https://gitHUb.com/danielkeb/tutorial-App-/calcApp/calculator',
    
  },
  {
    id:2,
    image:IMG2,
    title:'GETPCMS Intern Project',
    github:'https://github.com/danielkeb/Intern_project',
    
  },
  {
    id:3,
    image:IMG3,
    title:'To do app food Delivery',
    github:'https://github.com/danielkeb/flutter-app',
   
  },
  {
    id:4,
    image:IMG4,
    title:'Music Reccomendation based on Facial expressions',
    github:'https://github.com/danielkeb/emoton-based-',
   
  },
  {
    id:5,
    image:IMG5,
    title:'AGSMS as Saas',
    github:'https://github.com/danielkeb/Abune_Gorgoriwos_school_maangement_system',
    
  },
  {
    id:6,
    image:IMG6,
    title:'E-learning system ',
    github:'https://gitHUb.com/danielkeb/flutt',
    
  },

]
const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5 >what  Recent Work   </h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">{
   data.map(({id,image,title,github})=>{
    return(
      <article  key={id} className="portfolio_items">
      <div className='portfolio_item-image'>
        <img src={image} alt=""/> 
      </div>
      <h3>{title}</h3>
      <div className='portfolio_item-cta'>
      <a href={github} className='btn' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      

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