import React from "react";
import { Box, Typography, Grid2, Paper, Container } from "@mui/material";

const ProjectList = () => {
    const projectData = [
        {
            title: "Unified Content System",
            imgName: "project1.jpg",
            description: "Finding themselves at the end of the production chain, developers tend to turn into slow and frustrated beasts."
        },
        {
            title: "A two level menu approach for mobile",
            imgName: "project2.jpg",
            description: "Recently I've worked on a pretty complex information architecture. Try out a prototype I've created for the mobile version of the menu."
        },
        {
            title: "Pull-to-Return – A new interaction pattern?",
            imgName: "project3.jpg",
            description: "Recently I stumbled upon Feedly’s design rework and I’ve found a pretty neat interaction I’d love to share with you as a prototype."
        },
        {
            title: "Unveiled-Sticky-Navigation – Released as a jQuery       Plugin",
            imgName: "project5.jpg",
            description: "The navigation of medium.com examined, enhanced, and published as a jQuery plugin."
        }
    ]

    function displayProjectImg() {
        projectData.map((project, idx) => {
            console.log('{project.imgName} :>> ', `../assets/img/${project.imgName}`);
            return <>
                <Typography variant="caption" color="primary" sx={{ textTransform: "uppercase", letterSpacing: 1, mt: 1, display: "block" }}>
                    {project.title}
                </Typography>
                <Typography className="h4" variant="h4" fontWeight="bold" sx={{ mt: 2, mb: 2, lineHeight: 1.2, color: "#1E2B3A" }}>
                    {project.title}
                </Typography>
                <img
                    src={`../assets/img/${project.imgName}`}
                    alt={project.title}
                    className="projectImg"
                />
            </>
        })
    }
    return (
        <div className="container">
            <Container sx={{ my: 2 }}>
                {/* Left Section */}
                <Grid2 container spacing={2}>
                    <Grid2 item xs={5}>
                        <Paper elevation={3} sx={{ p: 5, textAlign: "center", backgroundColor: "#f5f5f5", height: "100%" }}  >
                        <img
                    src={`../assets/img/${projectData[0].imgName}`}
                    alt={projectData[0].title}
                    className="projectImg"
                />
                        </Paper>
                    </Grid2>
                    {/* Right Section */}
                    <Grid2 item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} size="grow">
                        <Box className="boxes" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            {projectData.map((item, index) => (
                                <Paper elevation={2} key={index} sx={{ boxSizing: "border-box", flex: "1 1 auto" }} p={8} my={1}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                                        {item.description}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
};

export default ProjectList;
