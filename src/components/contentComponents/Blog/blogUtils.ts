import { blogRoute } from "../../../configuration/navigation";
import { concatRoutes } from "../../../utils/globalUtils";

export const constructFullBlogRoute = (relativeRoute:string):string => concatRoutes(blogRoute.route, relativeRoute);