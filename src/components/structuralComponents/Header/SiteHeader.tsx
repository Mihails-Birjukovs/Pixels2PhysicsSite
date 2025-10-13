import type { JSX } from "react";
import Box from '@mui/material/Box';
import styles from "./SiteHeader.module.scss";
import Typography from "@mui/material/Typography";
import { NavigationButtons } from "../Navigation/NavigationButtons";

export const SiteHeader = ():JSX.Element => {
    return <Box className={styles.header}>
        <Box>
            <Typography variant="h2">
                Pixels2Physics
            </Typography>
        </Box>
        <Box>
            <Typography variant="subtitle2">
                Insert general header description here.
            </Typography>
        </Box>
        <Box>
            <NavigationButtons/>
        </Box>
    </Box>
}