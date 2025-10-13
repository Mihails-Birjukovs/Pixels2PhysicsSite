export interface  IRouteConfig{
    RouteDescription:string;
    Route:string;
}

export const HomeRoute:IRouteConfig = {
    RouteDescription: "Home",
    Route: "/Home"
};

export const AboutRoute:IRouteConfig = {
    RouteDescription: "About",
    Route: "/About"
};

export const CaseStudiesRoute:IRouteConfig = {
    RouteDescription: "Case Studies",
    Route: "/CaseStudies"
};

export const PublicationsRoute:IRouteConfig = {
    RouteDescription: "Publications",
    Route: "/Publications"
};

export const CollaborationsRoute:IRouteConfig = {
    RouteDescription: "Collaborations",
    Route: "/Collaborations"
};

export const BlogRoute:IRouteConfig = {
    RouteDescription: "Blog",
    Route: "/Blog"
}

export const ContactsRoute:IRouteConfig = {
        RouteDescription: "Contacts",
        Route: "/Contacts"
}

export const ServicesRoute:IRouteConfig = {
        RouteDescription: "Services",
        Route: "/Services"
}

export const AllRoutes:IRouteConfig[] = [
    HomeRoute,
    AboutRoute,
    CaseStudiesRoute,
    PublicationsRoute,
    CollaborationsRoute,
    BlogRoute,
    ContactsRoute,
    ServicesRoute
]