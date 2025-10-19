import { caseStudiesRoute } from "../../../configuration/navigation";
import { concatRoutes } from "../../../utils/globalUtils";

export const constructFullCaseRoute = (relativeRoute:string):string => concatRoutes(caseStudiesRoute.route, relativeRoute);