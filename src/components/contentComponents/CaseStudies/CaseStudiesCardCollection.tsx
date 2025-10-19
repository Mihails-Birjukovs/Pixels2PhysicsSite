import type { JSX } from "react";
import { CaseStudiesCard } from "./CaseStudiesCard";
import { Grid } from "@mui/material";
import type { ICaseStudy } from "./models/ICaseStudyData";

export interface ICollaborationCardCollectionProps {
    cards:ICaseStudy[];
    cardLimit?:number;
}

export const CaseStudiesCardCollection = (props:ICollaborationCardCollectionProps):JSX.Element => {
    return <>
        <Grid 
            container 
            spacing={3}
            alignItems="center"
            justifyContent="center"
        >
            {(props.cardLimit && props.cardLimit > 0 ? props.cards.slice(0, props.cardLimit) : props.cards).map(c => {
                return <Grid key={`${c.route}_${c.title}`} size={{xs:12, sm:12, md:6, lg:4, xl:3}}>
                    <CaseStudiesCard
                        {...c}
                    />
                </Grid>
            })}
        </Grid>
    </>
}