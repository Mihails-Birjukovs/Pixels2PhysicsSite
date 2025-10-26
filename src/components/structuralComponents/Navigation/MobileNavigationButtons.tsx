import type { JSX } from "react";
import { allTopLevelRoutes } from "../../../configuration/navigation";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";

export interface IMobileNavigationButtonsProps {
    open:boolean;
    onClose?:() => void;
}

export const MobileNavigationButtons = ({open: isOpen, onClose = () => {}}: IMobileNavigationButtonsProps):JSX.Element => {
    const navigate = useNavigate();

    return <>
        <Drawer open={isOpen} onClose={onClose}>
            <Box sx={{width:250}}>   
                <List>
                    {allTopLevelRoutes.map(r => {
                    return <ListItem key={r.route}>
                        <ListItemButton 
                            onClick={() => {
                                navigate(r.route);
                                onClose();
                            }}
                        >
                            <ListItemText primary={r.title}/>
                        </ListItemButton>
                    </ListItem>
                    })}
                </List>
            </Box>
        </Drawer>
    </>
}