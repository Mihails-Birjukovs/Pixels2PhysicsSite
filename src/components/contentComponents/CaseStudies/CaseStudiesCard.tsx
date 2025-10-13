import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import type { JSX } from "react";
import styles from "./styles/CaseStudiesCard.module.scss"
import { useNavigate } from "react-router";
import { ConstructFullCaseRoute } from "./caseUtils";

export interface ICollaboration {
    title:string;
    route:string;
    page?:JSX.Element;
    pictureUrl?:string;
    description?:string;
}

export interface ICollaborationCardProps extends ICollaboration {}

export const CaseStudiesCard = (props:ICollaborationCardProps):JSX.Element => {
    const navigate = useNavigate();

    return <>
        <Card aria-label="Link to study">
            <CardActionArea
                onClick={() => {
                    navigate(ConstructFullCaseRoute(props.route));
                }}
            >
                <CardContent>
                    <Box className={styles.cardPicture}>
                        {props.pictureUrl && <img src={props.pictureUrl}/>}
                    </Box>
                    <Box>
                        <Typography variant="h4">
                            {props.title}
                        </Typography>
                    </Box>
                    {props.description && <Box className={styles.description}>
                        <Typography>
                            {props.description}
                        </Typography>
                    </Box>}
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}