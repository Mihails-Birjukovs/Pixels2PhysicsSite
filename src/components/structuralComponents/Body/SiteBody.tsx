import { useEffect, useState, type JSX } from "react"
import { Routes, Route, Navigate } from "react-router";
import { allTopLevelRoutes, homeRoute} from "../../../configuration/navigation";
import { Home } from "../../contentComponents/Home/Home";
import { Box } from "@mui/material";
import { getCaseSources } from "../../contentComponents/CaseStudies/dataSource/caseStudySource";
import { constructFullCaseRoute } from "../../contentComponents/CaseStudies/caseUtils";
import type { ICaseStudy } from "../../contentComponents/CaseStudies/models/ICaseStudyData";
import { CaseWrapper } from "../../contentComponents/CaseStudies/CaseWrapper";


export const SiteBody = ():JSX.Element => {
    const [cases, setCases] = useState<ICaseStudy[]>([]);
    const [routesLoaded, setRoutesLoaded] = useState(false);
    useEffect(() => {
        setCases(getCaseSources());
        setRoutesLoaded(true);
    }, []);
    return <>
        <Box
            role="main"
            sx={{
                flex:"1 1 auto",
                margin:"20px",
                marginRight:"40px",
                marginLeft:"40px"
            }}
        >
            <Routes>
                <Route path="" element={<Home/>}/>
                {allTopLevelRoutes.map(r => {
                    return <Route path={r.route} element={r.page}>
                        {r.childRoutes}
                    </Route>
                })}
                {cases.map(c => {
                        return <Route path={constructFullCaseRoute(c.route)} element={<CaseWrapper {...c}/>}/>
                })}
                {routesLoaded && <Route path="*" element={<Navigate replace to={homeRoute.route} />}/>}
            </Routes>
        </Box>
    </>
}