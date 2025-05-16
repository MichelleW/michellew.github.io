import Carousel from './Carousel';
import LandingPage from './LandingPage';
import './index.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
function PlayfulPrecision() {
  return (
    <div className="playful-precision">
      <Navbar />
      {/* <LandingPage /> */}
      <Hero />
      {/* <Introduction />
      <ProjectSlider /> */}
      {/* <ProjectList /> */}
      <Carousel />
    </div>
  );
}

export default PlayfulPrecision;
