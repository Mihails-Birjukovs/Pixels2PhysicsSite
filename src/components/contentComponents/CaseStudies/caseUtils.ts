import { caseStudiesRoute } from "../../../configuration/navigation";

export const constructFullCaseRoute = (relativeRoute:string):string => {
    const trimmedRoute = relativeRoute.startsWith("/") ? relativeRoute.substring(1) : relativeRoute;
    return `${caseStudiesRoute.route}/${trimmedRoute}`
}