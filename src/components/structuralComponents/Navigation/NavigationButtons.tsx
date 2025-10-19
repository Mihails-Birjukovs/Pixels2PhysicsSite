import { Button, ButtonGroup } from "@mui/material";
import type { JSX } from "react";
import { allTopLevelRoutes } from "../../../configuration/navigation";
import { useNavigate } from "react-router";

export const NavigationButtons = ():JSX.Element => {
    const navigate = useNavigate();

    return <>
        <ButtonGroup variant="text">
                {allTopLevelRoutes.map(nb => {
                    return <Button 
                        //Very hacky override to not create a lot of work for us with mui themes and stuff.
                        style={{
                            color:"#FFFFFFDE"
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