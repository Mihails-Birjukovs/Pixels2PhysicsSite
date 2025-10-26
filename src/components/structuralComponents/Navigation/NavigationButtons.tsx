import { Button, ButtonGroup, useTheme } from "@mui/material";
import type { JSX } from "react";
import { allTopLevelRoutes } from "../../../configuration/navigation";
import { useNavigate } from "react-router";

export const NavigationButtons = ():JSX.Element => {
    const navigate = useNavigate();
    const theme = useTheme();

    return <>
        <ButtonGroup variant="text">
                {allTopLevelRoutes.map(nb => {
                    return <Button 
                        style={{
                            color: theme.palette.primary.contrastText
                        }}
                        key={`${nb.route}_${nb.title}`}
                        onClick={() =>{
                            navigate(nb.route);
                        }}
                    >
                        {nb.title}    
                    </Button>
                })}
            </ButtonGroup>
    </>
}