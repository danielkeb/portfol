// eslint-disable-next-line no-unused-vars
import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact} from '@fortawesome/free-brands-svg-icons';
import { faBootstrap} from '@fortawesome/free-brands-svg-icons';
//import { faFlutter} from '@fortawesome/free-brands-svg-icons';
import { faCss3} from '@fortawesome/free-brands-svg-icons';
import { faJs} from '@fortawesome/free-brands-svg-icons';
import { faPython} from '@fortawesome/free-brands-svg-icons';
import { faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faPhp} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMobile } from '@fortawesome/free-solid-svg-icons'; 
//import { faMern} from '@fortawesome/free-brands-svg-icons';
import './Experience.css'
const Experience = () => {
  return (
    <section id="experience">
      <h5 >what  Skills I Have  </h5>
      <h2>My Experience</h2>
      <div className="containr experience_container">
        <div className="experience_frontend">
          <h4 id="h">Frontend Developement</h4>
          <div className="experience_content">
            <article className='experience_details'>
            <FontAwesomeIcon icon={faReact} />
           <div> <h4>TypeScript</h4>
            <small className='text_light'>Experience</small></div>
            </article>

            <article className='experience_details'>
            <FontAwesomeIcon icon={faMobile} />
            <div><h4>Flutter</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faCss3} />
           <div> <h4>Tailwind CSS</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faJs} />
            <div><h4>JavaScript</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faBootstrap} />
           <div> <h4>BootStrap</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faReact} />
           <div> <h4>React</h4>
            <small className='text_light'>Experience</small></div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <FontAwesomeIcon icon={faDatabase}/>
           <div> <h4>NESTJS</h4>
            <small className='text_light'>Experience</small></div>
            </article>

            <article className='experience_details'>
            <FontAwesomeIcon icon={faNodeJs} />
            <div><h4>NodeJS</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faDatabase}/>
            <div><h4>Mysql</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faJava} />
           <div> <h4>Nextjs</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
              <FontAwesomeIcon icon={faDatabase}/>
            <div><h4>POSTGRESQL</h4>
            <small className='text_light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <FontAwesomeIcon icon={faPhp} />
            <div><h4>LARAVEL</h4>
            <small className='text_light'>Experience</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience