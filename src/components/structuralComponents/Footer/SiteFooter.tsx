import type { JSX } from "react";
import Box from '@mui/material/Box';
import { NavigationButtons } from "../Navigation/NavigationButtons";
import { Link, Typography, useMediaQuery } from "@mui/material";

export const SiteFooter = ():JSX.Element => {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

    return <>
        <Box 
            sx={{
                bgcolor:"secondary.main",
                flex:"0 1 100px",
                width:"100%",
                height:"100px",
                display:"flex",
                alignItems:"center",
                flexFlow:"column"  
            }}
            role="contentinfo"
        >
            <Box>
                {!isSmallScreen &&<Box>
                    <NavigationButtons/>
                </Box>}
                <Box>
                    <Typography 
                        variant="body1" 
                        color="secondary.contrastText"
                        style={{
                            textAlign: "center"
                        }}>© 2025 Pixels2Physics — Mihails Birjukovs</Typography>
                </Box>
                <Box>
                    <Box component="span"><Link color="secondary.contrastText" href="https://github.com/Mihails-Birjukovs" target="_blank" rel="noreferrer">GitHub</Link></Box>
                    <Box color="secondary.contrastText" component="span">&nbsp;•&nbsp;</Box>
                    <Box component="span"><Link color="secondary.contrastText" href="https://www.researchgate.net/profile/Mihails-Birjukovs" target="_blank" rel="noreferrer">ResearchGate</Link></Box>
                </Box>
            </Box>
        </Box>
    </>
}