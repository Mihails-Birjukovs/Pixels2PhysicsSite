import { Box, FormControlLabel, Switch, useColorScheme, useTheme } from "@mui/material";
import type { JSX } from "react"
import LightModeIcon from '@mui/icons-material/LightMode';

const innerLabel = "Light/Dark mode";
const ariaLabel = { inputProps: { "aria-label": innerLabel }};

export const ThemeSwitch = ():JSX.Element => {
    const { mode, systemMode, setMode } = useColorScheme();
    const isLightMode = ((mode ?? "system") == "system" ? (systemMode ?? "light") : mode) == "light";
    const theme = useTheme();

    return <>
        <Box 
            component="span"
            title={innerLabel}
        >
            <FormControlLabel label={
                <LightModeIcon 
                    sx={{
                        //Directly setting color doesent work for 'contrastText' function.
                        color: theme.palette.secondary.contrastText,
                        //Fixing the issue with not being alligned to switch.
                        marginTop:"6px"
                    }}
                    color="primary"
                />
            } control={
                <Switch
                    {...ariaLabel} 
                    checked={isLightMode}
                    onChange={(e) => {
                        setMode(e.target.checked ? "light" : "dark" );
                    }}
                />
            }/>
        </Box>
    </>
}