 
import LandingPage from './LandingPage';
import Introduction from './Introduction';
import ProjectList from './ProjectList';
import ProjectSlider from './ProjectSlider';
import './index.css';
function PlayfulPrecision() {
  return (
    <div className="playful-precision">
      <LandingPage />
      {/* <Introduction />
      <ProjectSlider /> */}
      <ProjectList />
    </div>
  );
}

export default PlayfulPrecision;
