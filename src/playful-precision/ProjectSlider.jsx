import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projectData, projectSlides } from './utils/projectData';

const ProjectSlider = () => {
  return (
    <div className="p-4">
      {projectData.map((project, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <Carousel showThumbs={false}>
            {projectSlides[project.title]?.map((slide, i) => (
              <div key={i} className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold mb-1">{slide.heading}</h3>
                <p className="text-sm text-gray-700">{slide.content}</p>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default ProjectSlider;