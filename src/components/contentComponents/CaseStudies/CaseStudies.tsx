import { useEffect, useState, type JSX } from "react";
import { GetCollaborationSources } from "./dataSource/caseStudySource";
import type { ICollaboration } from "./CaseStudiesCard";
import { CaseStudiesCardCollection } from "./CaseStudiesCardCollection";
import { Box } from "@mui/material";

export const CaseStudies = ():JSX.Element => {
    const [studies, setStudies] = useState<ICollaboration[]>([]) 
    useEffect(() => {
        setStudies(GetCollaborationSources());
    }, []);

    return <>
        <Box>
            {studies.length > 0 && <CaseStudiesCardCollection
                cards={studies}
            />}
        </Box>
    </>
}