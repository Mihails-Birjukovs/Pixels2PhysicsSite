import { Button, ButtonGroup } from "@mui/material";
import type { JSX } from "react";
import { AllRoutes } from "../../../configuration/navigation";
import { useNavigate } from "react-router";

export const NavigationButtons = ():JSX.Element => {
    const navigate = useNavigate();

    return <>
        <ButtonGroup variant="text">
                {AllRoutes.map(nb => {
                    return <Button 
                        //Very hacky override to not create a lot of work for us with mui themes and stuff.
                        style={{
                            color:"#FFFFFFDE"
                        }}
                        key={`${nb.Route}_${nb.RouteDescription}`}
                        onClick={() =>{
                            navigate(nb.Route);
                        }}
                    >
                        {nb.RouteDescription}    
                    </Button>
                })}
            </ButtonGroup>
    </>
}