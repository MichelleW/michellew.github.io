import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectSlider = () => {
  const projects = [
    {
      type: "Case Study",
      title: "Student Dashboard Redesign",
      slides: [
        {
          heading: "Overview",
          content: "Redesigned a legacy dashboard for Pearson using React, focusing on accessibility and user feedback loops."
        },
        {
          heading: "Problem & Goals",
          content: "Old UI was inconsistent and hard to navigate. Goal: modern, intuitive, accessible interface."
        },
        {
          heading: "Process",
          content: "Worked closely with UX to translate Figma into React components. Integrated ARIA roles, keyboard nav, and custom themes."
        },
        {
          heading: "Tech Stack & Challenges",
          content: "Used React + Styled Components + TypeScript. Handled design tokens, performance tuning, and WCAG 2.1 compliance."
        },
        {
          heading: "Outcome",
          content: "+40% task completion rate, -25% drop in support tickets."
        }
      ]
    },
    {
      type: "Visual Showcase",
      title: "Mobile Nav Animation",
      slides: [
        {
          heading: "Before",
          content: "GIF or screenshot showing the old dropdown interaction."
        },
        {
          heading: "After",
          content: "Improved animation using Framer Motion and reduced CLS shift."
        }
      ]
    },
    {
      type: "Engineering Focus",
      title: "GraphQL Order Dashboard",
      slides: [
        {
          heading: "Overview",
          content: "Built an order dashboard using React + Apollo Client + Material UI."
        },
        {
          heading: "Tech Stack",
          content: "GraphQL, React, CSS-in-JS, Node.js backend"
        },
        {
          heading: "Performance",
          content: "Reduced load time from 2.5s to 850ms with memoization + lazy queries."
        }
      ]
    }
  ];

  return (
    <div className="p-4">
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <Carousel showThumbs={false}>
            {project.slides.map((slide, i) => (
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