import { useEffect, useState, type JSX } from "react"
import { Routes, Route, Navigate } from "react-router";
import { allTopLevelRoutes, homeRoute} from "../../../configuration/navigation";
import { Home } from "../../contentComponents/Home/Home";
import { Box } from "@mui/material";
import styles from "./SiteBody.module.scss";
import { GetCaseSources } from "../../contentComponents/CaseStudies/dataSource/caseStudySource";
import type { ICaseStudy } from "../../contentComponents/CaseStudies/CaseStudiesCard";
import { constructFullCaseRoute } from "../../contentComponents/CaseStudies/caseUtils";


export const SiteBody = ():JSX.Element => {
    const [cases, setCases] = useState<ICaseStudy[]>([]);
    const [routesLoaded, setRoutesLoaded] = useState(false);
    useEffect(() => {
        setCases(GetCaseSources());
        setRoutesLoaded(true);
    }, []);
    return <>
        <Box className={styles.body}>
            <Routes>
                <Route path="" element={<Home/>}/>
                {allTopLevelRoutes.map(r => {
                    return <Route path={r.route} element={r.page}/>
                })}
                {cases.map(c => {
                        return <Route path={constructFullCaseRoute(c.route)} element={c.page}/>
                })}
                {routesLoaded && <Route path="*" element={<Navigate replace to={homeRoute.route} />}/>}
            </Routes>
        </Box>
    </>
}