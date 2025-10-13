import type { JSX } from "react";
import Box from '@mui/material/Box';
import styles from "./SiteFooter.module.scss";
import { NavigationButtons } from "../Navigation/NavigationButtons";

export const SiteFooter = ():JSX.Element => {
    return <>
        <Box className={styles.footer}>
            <Box>
                <Box>
                    <NavigationButtons/>
                </Box>
                <Box>
                    © 2025 Pixels2Physics — Mihails Birjukovs
                </Box>
                <Box>
                    <span><a href="https://github.com/Mihails-Birjukovs" target="_blank">GitHub</a></span><span>&nbsp;•&nbsp;</span><span><a href="https://www.researchgate.net/profile/Mihails-Birjukovs"  target="_blank">ResearchGate</a></span>
                </Box>
            </Box>
        </Box>
    </>
}