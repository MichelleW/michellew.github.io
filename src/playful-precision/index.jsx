import Carousel from './Carousel'; 
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import './index.css';

function PlayfulPrecision() {
  return (
    <div className="playful-precision">
      <Navbar /> 
      {/* <Hero /> 
      <Carousel /> */}
      <Blog />
      <Contact />
    
    </div>
  );
}

export default PlayfulPrecision;
