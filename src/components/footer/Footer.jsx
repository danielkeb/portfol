// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'>dkklearningservice</a>
        <ul className='permalinks'>
            <li> <a href="#">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#experience">Experience</a></li>
            <li> <a href="#services">Services</a></li>
            <li> <a href="#portfolio">Potrfolio</a></li>
            <li> <a href="#testimonals">Testimonials</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>

        <div className='footer_socials'>
            <a href="https://facebook.com/ewunetyinager"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px'}}/></a>
            <a href="@Until_u_die"><FontAwesomeIcon icon={faTelegram} style={{fontSize:'24px'}}/></a>

        </div>

        <div className="footer_copyright">
            <small>&copy; dkklearningservice. All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer