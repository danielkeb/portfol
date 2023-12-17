/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

//import {BsLinkedin} from 'react-icos/bs'
//import {FaGithub} from 'react-icos/fa'
//import {FaDribble} from 'react-icos/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Header.css'
const HeaderSocial = () => {
  return (
    <div className='header_social'> 
    <a href='https://www.linkedin.com/in/daniel-kebede-55872b269/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BlFl%2B7Sl3TjerbGdpJ%2BU60A%3D%3D' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a>
    <a href='https://github.com/danielkeb' target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
    <a href='@Until_u_die' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} /></a>
    </div>
  )
}

export default HeaderSocial