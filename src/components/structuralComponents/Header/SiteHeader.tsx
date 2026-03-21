import { useState, type JSX } from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { NavigationButtons } from "../Navigation/NavigationButtons";
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, IconButton, useTheme, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MobileNavigationButtons } from "../Navigation/MobileNavigationButtons";
import { ThemeSwitch } from "../Controls/ThemeSwitch";

const title = "Pixels2Physics";
const subTitle = "Insert general header description here.";

export const SiteHeader = ():JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return <>
        {!isSmallScreen && <>
            <Box 
                sx={{
                    width: "100%",
                    flex: "0 1 auto",
                    minHeight: "135px",
                    bgcolor: "secondary.main"             
                }}
                role="banner"
            >
                <Box>
                    <Typography 
                        variant="h2"
                        component="h1"
                        color="secondary.contrastText"
                        >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            position:"absolute",
                            right:"0",
                            top:"10px"
                        }}
                    >
                        <ThemeSwitch/>
                    </Box>
                </Box>
                <Box>
                    <Typography 
                        color="secondary.contrastText"
                        variant="subtitle2"
                    >
                        {subTitle}
                    </Typography>
                </Box>
                <Box>
                    <NavigationButtons/>
                </Box>
            </Box>
        </>}
        {isSmallScreen && <>
                <AppBar 
                    color="secondary" 
                    position="static"
                    role="banner"
                >
                    <Toolbar>
                        <IconButton
                            title="Navigation"
                            size="large"
                            edge="start"
                            style={{
                                color:theme.palette.secondary.contrastText
                            }}
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                setIsMobileMenuOpen(true);
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <MobileNavigationButtons open={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}/>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
                        <Box
                            sx={{
                                marginRight : "-20px"
                            }}
                        >
                            <ThemeSwitch/>
                        </Box>
                    </Toolbar>
                </AppBar>
        </>}
    </>
}