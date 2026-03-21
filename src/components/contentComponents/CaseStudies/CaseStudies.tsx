import { useState, type JSX } from "react";
import { getCaseSources } from "./dataSource/caseStudySource";
import { CaseStudiesCardCollection } from "./CaseStudiesCardCollection";
import { Box } from "@mui/material";
import type { ICaseStudy } from "./models/ICaseStudyData";
import { useTitleHook } from "../../../hooks/useTitleHook";

export const CaseStudies = ():JSX.Element => {
    const [studies] = useState<ICaseStudy[]>(getCaseSources());
    useTitleHook("Pixels2Physics - Case Studies");

    return <>
        <Box>
            {studies.length > 0 && <CaseStudiesCardCollection
                cards={studies}
            />}
        </Box>
    </>
}