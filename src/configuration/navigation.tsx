import type { JSX } from "react";
import { Home } from "../components/contentComponents/Home/Home";
import { About } from "../components/contentComponents/About/About";
import { CaseStudies } from "../components/contentComponents/CaseStudies/CaseStudies";
import { Publications } from "../components/contentComponents/Publications/Publications";
import { Collaborations } from "../components/contentComponents/Collaborations/Collaborations";
import { Blog } from "../components/contentComponents/Blog/Blog";
import { Contacts } from "../components/contentComponents/Contacts/Contacts";
import { Services } from "../components/contentComponents/Services/Services";

export interface IRouteConfig{
    routeDescription:string;
    route:string;
    page?:JSX.Element;
}

export const homeRoute:IRouteConfig = {
    routeDescription: "Home",
    route: "/Home",
    page: <Home/>
};

export const aboutRoute:IRouteConfig = {
    routeDescription: "About",
    route: "/About",
    page: <About/>
};

export const caseStudiesRoute:IRouteConfig = {
    routeDescription: "Case Studies",
    route: "/CaseStudies",
    page: <CaseStudies/>
};

export const publicationsRoute:IRouteConfig = {
    routeDescription: "Publications",
    route: "/Publications",
    page: <Publications/>
};

export const collaborationsRoute:IRouteConfig = {
    routeDescription: "Collaborations",
    route: "/Collaborations",
    page: <Collaborations/>
};

export const blogRoute:IRouteConfig = {
    routeDescription: "Blog",
    route: "/Blog",
    page: <Blog/>
}

export const contactsRoute:IRouteConfig = {
    routeDescription: "Contacts",
    route: "/Contacts",
    page: <Contacts/>
}

export const servicesRoute:IRouteConfig = {
    routeDescription: "Services",
    route: "/Services",
    page: <Services/>
}

export const allTopLevelRoutes:IRouteConfig[] = [
    homeRoute,
    aboutRoute,
    caseStudiesRoute,
    publicationsRoute,
    collaborationsRoute,
    blogRoute,
    contactsRoute,
    servicesRoute
]