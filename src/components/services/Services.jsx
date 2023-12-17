import './Services.css'
const Services = () => {
  return (
    <section id="services">
    <h5 >what  I  Offer   </h5>
    <h2>Services</h2>
    <div className="container services_container">
      <article className="service">
        
        <div className="service_head">
          <h3>UI/UX Design</h3>
         </div>
         <ul className='service_list'>
         <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Intuitive User Interface (UI) Design: Crafting user-centric interfaces that ensure a seamless and visually appealing user experience. From wireframes to high-fidelity mockups, I create designs that resonate with your target audience.</p>
  </li>
  <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>User Experience (UX) Research: Delving into user behavior and preferences through in-depth research to inform design decisions. By understanding user needs and pain points, I create solutions that enhance engagement and satisfaction.</p>
  </li>
  <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Responsive Design and Prototyping: Developing responsive designs that adapt seamlessly across various devices, ensuring a consistent and enjoyable experience. I create interactive prototypes to validate concepts and iterate efficiently.</p>
  </li>
         </ul>
         </article>

         {/*web development service */}
         <article className="service">
        
        <div className="service_head">
          <h3>Web Development</h3>
         </div>
         <ul className='service_list'>
         <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Custom Website Development: Crafting tailor-made websites that reflect your brand identity and cater to your specific needs. From e-commerce platforms to informative websites, I bring your vision to life with clean code and elegant design.</p>
  </li>
  <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Responsive Design and Optimization: Ensuring that your website looks and functions flawlessly across various devices and screen sizes. I optimize performance and load times to provide an exceptional user experience.</p>
  </li>
  <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Content Management Systems (CMS): Building user-friendly CMS solutions like WordPress or Drupal, empowering you to manage and update your website's content effortlessly. I provide training and support to help you make the most of your CMS.</p>
  </li>
         </ul>
         </article>
            {/*content creation */}
         <article className="service">
        
        <div className="service_head">
          <h3>Content Creation</h3>
         </div>
         <ul className='service_list'>
         <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Engaging Blog Posts: Crafting well-researched and compelling blog articles that captivate readers and provide valuable insights. I specialize in delivering content that resonates with your target audience and enhances your brand's credibility.</p>
  </li>
  <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>Visual Storytelling: Creating visually appealing graphics, infographics, and videos that convey your message effectively. From informative infographics to engaging social media videos, I help you communicate with impact.</p>
  </li>
  <li>
    {/* <BiCheck className="service_list-icon"/> */}
    <p>SEO-Optimized Content: Crafting content that not only informs but also ranks well on search engines. I conduct keyword research and implement SEO best practices to ensure your content reaches a wider audience and drives organic traffic.</p>
  </li>
         </ul>
         </article>
         </div>

         </section>

  )
}

export default Services