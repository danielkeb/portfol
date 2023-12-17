// eslint-disable-next-line no-unused-vars
import React from 'react'
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio14.png';
import IMG4 from '../../assets/portfolio10.png';
import IMG5 from '../../assets/portfolio7.png';
import IMG6 from '../../assets/portfolio6.png';
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub} from '@fortawesome/free-brands-svg-icons';


const data=[
  {
    id:1,
    image:IMG1,
    title:'Ebook tutorial App',
    github:'https://gitHUb.com/danielkeb/ebook',
    demo:'https://dribble.com/shots/23424'
  },
  {
    id:2,
    image:IMG2,
    title:'Admin Dashboard for GET-PC Manage System',
    github:'https://github.com/danielkeb/pc_register-system',
    demo:'https://www.figma.com/proto/GYdsF4hKijpHv4F9NnrwNl/HITMS?type=design&node-id=1-2&t=NPlbAWDC6gk9Xo1N-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2'
  },
  {
    id:3,
    image:IMG3,
    title:'To do app food Delivery',
    github:'https://github.com/danielkeb/pc_register-system',
    demo:'https://dribble.com/shots/23424'
  },
  {
    id:4,
    image:IMG4,
    title:'Hospital Card Reservation system',
    github:'https://github.com/danielkeb/pc_register-system',
    demo:'https://dribble.com/shots/23424'
  },
  {
    id:5,
    image:IMG5,
    title:'GET PC-Management System',
    github:'https://github.com/danielkeb/pc_register-system',
    demo:'https://www.figma.com/proto/GYdsF4hKijpHv4F9NnrwNl/HITMS?type=design&node-id=1-2&t=NPlbAWDC6gk9Xo1N-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2'
  },
  {
    id:6,
    image:IMG6,
    title:'E-learning system ',
    github:'https://gitHUb.com/danielkeb/flutter-app',
    demo:'https://dribble.com/shots/23424'
  },

]
const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5 >what  Recent Work   </h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">{
   data.map(({id,image,title,github,demo})=>{
    return(
      <article  key={id} className="portfolio_items">
      <div className='portfolio_item-image'>
        <img src={image} alt=""/> 
      </div>
      <h3>{title}</h3>
      <div className='portfolio_item-cta'>
      <a href={github} className='btn' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

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