import Carousel from './Carousel'; 
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Blog from './Blog/Blog';
import './index.css';

function PlayfulPrecision() {
  return (
    <div className="playful-precision">
      <Navbar /> 
      <Hero /> 
      <Carousel />
      <Blog />
    </div>
  );
}

export default PlayfulPrecision;
