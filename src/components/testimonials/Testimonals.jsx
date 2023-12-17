// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Testimonals.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/bly.jpg'
import AVTR3 from '../../assets/bek.jpeg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonals = () => {
  return (
    <section id="testimonials">
    <h5 >Review from clients   </h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials_container"  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
   
    
      <SwiperSlide  className="testimonial">
      <div className='client_avator'>
        <img src={AVTR1} alt=""/> 
        </div>
      <h5 className='client_name'>Binyam</h5>
      <article> UX/UI Designer</article>
      <small className='client_review'>
      Daniel's expertise in backend development was instrumental in the success of our recent web application project.
      His commitment to creating a robust and scalable backend architecture ensured that our application not only met but exceeded performance expectations. 
      Daniel's attention to detail and problem-solving skills make him a standout backend developer. 
      I highly recommend Daniel to anyone seeking a reliable and skilled professional for their development needs.
      </small>
      
    </SwiperSlide>

    <SwiperSlide  className="testimonial">
      <div className='client_avator'>
        <img src={AVTR2} alt=""/> 
        </div>
      <h5 className='client_name'>Belay</h5>
      <article> Software Engineer</article>
      <small className='client_review'>
      Working with Daniel on the backend of our e-commerce website was a game-changer. 
      His ability to handle complex data structures and seamlessly integrate payment gateways made our online store not only functional but also efficient. 
      Daniel's dedication to writing clean and maintainable code has made future updates a breeze.
       If you're looking for a backend developer who truly understands the intricacies of e-commerce, Daniel is the person to trust.
      </small>
      
    </SwiperSlide>

    <SwiperSlide  className="testimonial">
      <div className='client_avator'>
        <img src={AVTR3} alt=""/> 
        </div>
       
      <h5 className='client_name'>Bereket  </h5>
      <article>Full stack developer</article>
      <small className='client_review'>
      Daniel played a key role in the development of our custom software solution. 
      His in-depth knowledge of backend technologies and databases ensured that our software could handle our unique requirements. 
      What sets Daniel apart is his proactive approach to problem-solving – he anticipates challenges and addresses them before they become issues. 
      Collaborating with Daniel was a pleasure, and I wholeheartedly recommend his services to anyone in need of a talented backend developer.
      </small>
      
    </SwiperSlide>

    <SwiperSlide  className="testimonial">
      <div className='client_avator'>
        <img src={AVTR4} alt=""/> 
        </div>
      <h5 className='client_name'>Dagamawi</h5>
      <article> Data Scientist</article>
      <small className='client_review'>
        Daniel's expertise in backend development was crucial for the success of our data-driven application. 
        His ability to design and implement a scalable database architecture allowed us to efficiently manage 
        and analyze large volumes of data. Daniel's professionalism, communication skills, and commitment to 
        delivering high-quality work make him an excellent choice for anyone looking for a backend developer. 
        I'm grateful for Daniel's contributions to our project and recommend him without hesitation.
      </small>
      
    </SwiperSlide>
   
      </Swiper>
      </section>
       
  )
}

export default Testimonals