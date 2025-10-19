export const concatRoutes = (topRoute:string, bottomRoute:string):string => {
    const trimmedTopRoute = topRoute.endsWith("/") ? topRoute.slice(0, -1) : topRoute;
    const trimmedBottomRoute = bottomRoute.startsWith("/") ? bottomRoute.substring(1) : bottomRoute;
    return `${trimmedTopRoute}/${trimmedBottomRoute}`
}