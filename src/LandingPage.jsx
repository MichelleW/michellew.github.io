import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from "@mui/material";
 
import './LandingPage.css'; 
import Introduction from './Introduction'; // Import the Introduction component

const LandingPage = () => {
    return (
        <Box className="landingPage"> 
            <AppBar position="absolute" color="transparent" elevation={0}>
                <Toolbar sx={{ justifyContent: "center", px: 5 }}>
                    <Typography variant="h6" sx={{ letterSpacing: 2, textTransform: "uppercase", fontWeight: "bold", flexGrow: 1, textAlign: "center" }}>
                        Michelle Wu - Creative Technologist / UX Engineer
                    </Typography>
                    <IconButton edge="end" color="inherit" size="large" sx={{ position: "absolute", right: 16, transform: "scale(1.5)" }} disableRipple>
                    <span class="material-icons-outlined">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                    </span>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Box> 
                <Avatar
                    alt="Profile Picture"
                    src="../assets/img/profile.png"
                    className="avatar-position"  
                    sx={{
                        width: 750,
                        height: 750,
                        zIndex: 1
                    }}
                />
            </Box> 
        </Box>
    );
};

export default LandingPage;