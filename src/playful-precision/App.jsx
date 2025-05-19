import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ProjectList from './ProjectList/ProjectList';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './global.css';

function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <ProjectList />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App; 