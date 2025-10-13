import { useEffect, useState, type JSX } from "react"
import { Routes, Route, Navigate } from "react-router";
import { AboutRoute, BlogRoute, CaseStudiesRoute, CollaborationsRoute, ContactsRoute, HomeRoute, PublicationsRoute, ServicesRoute } from "../../../configuration/navigation";
import { Home } from "../../contentComponents/Home/Home";
import { About } from "../../contentComponents/About/About";
import { CaseStudies } from "../../contentComponents/CaseStudies/CaseStudies";
import { Publications } from "../../contentComponents/Publications/Publications";
import { Blog } from "../../contentComponents/Blog/Blog";
import { Contacts } from "../../contentComponents/Contacts/Contacts";
import { Box } from "@mui/material";
import styles from "./SiteBody.module.scss";
import { Collaborations } from "../../contentComponents/Collaborations/Collaborations";
import { Services } from "../../contentComponents/Services/Services";
import { GetCollaborationSources } from "../../contentComponents/CaseStudies/dataSource/caseStudySource";
import type { ICollaboration } from "../../contentComponents/CaseStudies/CaseStudiesCard";
import { ConstructFullCaseRoute } from "../../contentComponents/CaseStudies/caseUtils";


export const SiteBody = ():JSX.Element => {
    const [cases, setCases] = useState<ICollaboration[]>([]);
    const [routesLoaded, setRoutesLoaded] = useState(false);
    useEffect(() => {
        setCases(GetCollaborationSources());
        setRoutesLoaded(true);
    }, []);
    return <>
        <Box className={styles.body}>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path={HomeRoute.Route} element={<Home/>}/>
                <Route path={AboutRoute.Route} element={<About/>}/>
                <Route path={CaseStudiesRoute.Route} element={<CaseStudies/>}/>
                <Route path={PublicationsRoute.Route} element={<Publications/>}/>
                <Route path={CollaborationsRoute.Route} element={<Collaborations/>}/>
                <Route path={BlogRoute.Route} element={<Blog/>}/>
                <Route path={ContactsRoute.Route} element={<Contacts/>}/>
                <Route path={ServicesRoute.Route} element={<Services/>}/>
                {cases.map(c => {
                        return <Route path={ConstructFullCaseRoute(c.route)} element={c.page}/>
                })}
                {routesLoaded && <Route path="*" element={<Navigate replace to={HomeRoute.Route} />}/>}
            </Routes>
        </Box>
    </>
}