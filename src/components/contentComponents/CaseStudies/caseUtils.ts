import { CaseStudiesRoute } from "../../../configuration/navigation";

export const ConstructFullCaseRoute = (relativeRoute:string):string => {
    const trimmedRoute = relativeRoute.startsWith("/") ? relativeRoute.substring(1) : relativeRoute;
    return `${CaseStudiesRoute.Route}/${trimmedRoute}`
}