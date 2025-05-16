// Import all images
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project5 from '../assets/project5.jpg';

// Image mapping object
export const projectImages = {
    'project1.jpg': project1,
    'project2.jpg': project2,
    'project3.jpg': project3,
    'project5.jpg': project5,
};

// Helper function to get image URL
export const getProjectImage = (imageName) => {
    return projectImages[imageName] || '';
}; 