import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import type { JSX } from "react";
import { useNavigate } from "react-router";
import { constructFullCaseRoute } from "./caseUtils";
import type { ICaseStudy } from "./models/ICaseStudyData";


export interface ICaseCardProps extends ICaseStudy {}

export const CaseStudiesCard = (props:ICaseCardProps):JSX.Element => {
    const navigate = useNavigate();

    return <>
        <Card aria-label="Link to study">
            <CardActionArea
                onClick={() => {
                    navigate(constructFullCaseRoute(props.route));
                }}
            >
                <CardContent>
                    <Box 
                        sx={{
                            width: "250px",
                            height: "250px",
                            margin: "auto",
                            "& img": {
                                objectFit:"contain",
                                height:"100%",
                                width:"100%"
                            }
                        }}
                    >
                        {props.pictureUrl && <img src={props.pictureUrl}/>}
                    </Box>
                    <Box>
                        {/**TODO - Need to find a solution to multiline titles breaking the cards...*/}
                        <Typography variant="h5" component="h2">
                            {props.title}
                        </Typography>
                    </Box>
                    {props.description && <Box 
                        sx={{
                            maxHeight:"100px",
                            overflow:"hidden",
                            wordWrap:"normal"
                        }}
                    >
                        <Typography>
                            {props.description}
                        </Typography>
                    </Box>}
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}