import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Introduction = () => {
    const projectData = [
        {
            title: "Unified Content System",
            imgName: "project1.jpg",
            description: "Finding themselves at the end of the production chain, developers tend to turn into slow and frustrated beasts."
        },
        {
            title: "Search & Explore",
            imgName: "project2.jpg",
            description: "UXE + S&E have been collaborating to develop a real data, high fidelity prototype to help the team rapidly design, iterate, learn, and test interaction on the base map."
        },
        {
            title: "Pull-to-Return – A new interaction pattern?",
            imgName: "project2.jpg",
            description: "Recently I stumbled upon Feedly’s design rework and  "
        },
        {
            title: "Unveiled-Sticky-Navigation – Released as a jQuery       Plugin",
            imgName: "project3.jpg",
            description: "The navigation of medium.com "
        }, 
         {
            title: "UI content system tool",
            imgName: "project5.jpg",
            description: "Made UI updates based on designer feedback, fixed some bugs and added new component "
        }
    ]
    function displayProjectImg() {

        projectData.map((item, idx) => {
            
                <Paper elevation={3} sx={{ p: 5, textAlign: "center", backgroundColor: "#f5f5f5", height: "100%" }}  >
                    <Typography variant="caption" color="primary" sx={{ textTransform: "uppercase", letterSpacing: 1, mt: 1, display: "block" }}>
                     {item.title}
                    </Typography>
                    <Typography className="h4" variant="h4" fontWeight="bold" sx={{ mt: 2, mb: 2, lineHeight: 1.2, color: "#1E2B3A" }}>
                        {projectData[0].title}
                    </Typography>
                    <img
                        src={projectData.imgName}
                        alt={projectData.title}
                        loading="lazy"
                        className="projectImg"
                    />
                </Paper>
           
        })
    }

    return (
        <div className="intro">
            <h1>Projects </h1>
            <p> Hi, I'm Michelle Wu, a Creative Technologist and UX Engineer. I specialize in creating engaging and user-friendly digital experiences. Explore my portfolio to see my work and learn more about my skills and expertise.</p>

        </div>
    );
};

export default Introduction;