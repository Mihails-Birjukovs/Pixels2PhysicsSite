import { useState, type JSX } from "react";
import Box from '@mui/material/Box';
import styles from "./SiteHeader.module.scss";
import Typography from "@mui/material/Typography";
import { NavigationButtons } from "../Navigation/NavigationButtons";
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, IconButton, useTheme, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MobileNavigationButtons } from "../Navigation/MobileNavigationButtons";

const title = "Pixels2Physics";
const subTitle = "Insert general header description here.";

export const SiteHeader = ():JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return <>
    {!isSmallScreen && <>
        <Box 
            bgcolor="primary.main"
            className={styles.header}
        >
            <Box>
                <Typography 
                    variant="h2"
                    color="primary.contrastText"
                    >
                    {title}
                </Typography>
            </Box>
            <Box>
                <Typography 
                    color="primary.contrastText"
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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        style={{
                            color:theme.palette.primary.contrastText
                        }}
                        color="secondary"
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
                </Toolbar>
            </AppBar>
        </Box>
    </>}
    </>
}