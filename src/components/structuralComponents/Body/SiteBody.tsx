import { useEffect, useState, type JSX } from "react"
import { Routes, Route, Navigate } from "react-router";
import { allTopLevelRoutes, homeRoute} from "../../../configuration/navigation";
import { Home } from "../../contentComponents/Home/Home";
import { Box } from "@mui/material";
import styles from "./SiteBody.module.scss";
import { getCaseSources } from "../../contentComponents/CaseStudies/dataSource/caseStudySource";
import { constructFullCaseRoute } from "../../contentComponents/CaseStudies/caseUtils";
import type { ICaseStudy } from "../../contentComponents/CaseStudies/models/ICaseStudyData";


export const SiteBody = ():JSX.Element => {
    const [cases, setCases] = useState<ICaseStudy[]>([]);
    const [routesLoaded, setRoutesLoaded] = useState(false);
    useEffect(() => {
        setCases(getCaseSources());
        setRoutesLoaded(true);
    }, []);
    return <>
        <Box className={styles.body}>
            <Routes>
                <Route path="" element={<Home/>}/>
                {allTopLevelRoutes.map(r => {
                    return <Route path={r.route} element={r.page}>
                        {r.childRoutes}
                    </Route>
                })}
                {cases.map(c => {
                        return <Route path={constructFullCaseRoute(c.route)} element={c.page}/>
                })}
                {routesLoaded && <Route path="*" element={<Navigate replace to={homeRoute.route} />}/>}
            </Routes>
        </Box>
    </>
}