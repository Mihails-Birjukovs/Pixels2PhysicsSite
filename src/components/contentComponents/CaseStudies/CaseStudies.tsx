import { useEffect, useState, type JSX } from "react";
import { GetCaseSources } from "./dataSource/caseStudySource";
import type { ICaseStudy } from "./CaseStudiesCard";
import { CaseStudiesCardCollection } from "./CaseStudiesCardCollection";
import { Box } from "@mui/material";

export const CaseStudies = ():JSX.Element => {
    const [studies, setStudies] = useState<ICaseStudy[]>([]) 
    useEffect(() => {
        setStudies(GetCaseSources());
    }, []);

    return <>
        <Box>
            {studies.length > 0 && <CaseStudiesCardCollection
                cards={studies}
            />}
        </Box>
    </>
}