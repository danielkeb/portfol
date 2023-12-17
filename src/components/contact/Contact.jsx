import { useRef } from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MdOutlineMail } from "react-icons/md";

import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ndzugzd', 'template_ykotyhr', form.current, 'zBuzq55OXkC-D2cpq')
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_optons">
          <article className="contact_option">
            {/*<MdOutlineEmail/>*/}
            <MdOutlineMail />
            <h4>Email</h4>
          <a href="mailto:danielkebede381@gmail.com" target="_blank" rel="noopener noreferrer">send a message</a>

          </article>

          <article className="contact_option">
          <FontAwesomeIcon icon={faTelegram} />
          <p>Telegram</p>
          <a href="tg://openmessage?user_id=1567100441&message_id=15397" target="_blank" rel="noreferrer">send a message</a>
          </article>
        

          <article className="contact_option">
          <FontAwesomeIcon icon={faYoutube} />
            <h4>youtube</h4>
          <a href="https://www.youtube.com/channel/UCTQk_EPcKjSUKtCuD-d5Eow" target="_blank" rel="noreferrer">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="name" className='input' required/>
          <input type="email"  name="email" placeholder="email" className='input' required />
          <textarea name="message" rows="7" id="" cols="30" placeholder="your message" className='input' required></textarea>
          <button className="btn btn-primary" type="submit">send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact