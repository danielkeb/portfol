import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Contact from './components/contact/Contact';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Header from './components/header/Header';
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonals'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/experience/Experience';
// import HomePage from './components/home/homepage';

function App() {
  return (
    
    <Router>
      <Header/>
   <Nav/>
      <About/>
      
      <Experience/>
      <Testimonials/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      {/* <Routes>
     
         <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path='/homepage' element={<HomePage/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> }
        
      </Routes> */}
    </Router>
  );
}

export default App;
