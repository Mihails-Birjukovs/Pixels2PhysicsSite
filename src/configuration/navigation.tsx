import { Home } from "../components/contentComponents/Home/Home";
import { About } from "../components/contentComponents/About/About";
import { CaseStudies } from "../components/contentComponents/CaseStudies/CaseStudies";
import { Publications } from "../components/contentComponents/Publications/Publications";
import { Collaborations } from "../components/contentComponents/Collaborations/Collaborations";
import { Blog } from "../components/contentComponents/Blog/Blog";
import { Contacts } from "../components/contentComponents/Contacts/Contacts";
import { Services } from "../components/contentComponents/Services/Services";
import type { IRoutable } from "../models/IRoutable";
import { Route } from "react-router";
import { getBlogSources } from "../components/contentComponents/Blog/dataSource/blogDataSource";
import type { IBlogData } from "../components/contentComponents/Blog/models/IBlogData";
import { constructFullBlogRoute } from "../components/contentComponents/Blog/blogUtils";

const blogs:IBlogData[] = getBlogSources();

export interface IRouteConfig extends IRoutable {}

export const homeRoute:IRouteConfig = {
    title: "Home",
    route: "/Home",
    page: <Home/>
};

export const aboutRoute:IRouteConfig = {
    title: "About",
    route: "/About",
    page: <About/>
};

export const caseStudiesRoute:IRouteConfig = {
    title: "Case Studies",
    route: "/CaseStudies",
    page: <CaseStudies/>
};

export const publicationsRoute:IRouteConfig = {
    title: "Publications",
    route: "/Publications",
    page: <Publications/>
};

export const collaborationsRoute:IRouteConfig = {
    title: "Collaborations",
    route: "/Collaborations",
    page: <Collaborations/>
};

export const blogRoute:IRouteConfig = {
    title: "Blog",
    route: "/Blog",
    page: <Blog/>,
};
//Can't put it inside, due to accessing it's properties before initialization.
blogRoute.childRoutes = blogs.map(blog => <Route path={constructFullBlogRoute(blog.route)} element={blog.page}/>);

export const contactsRoute:IRouteConfig = {
    title: "Contacts",
    route: "/Contacts",
    page: <Contacts/>
}

export const servicesRoute:IRouteConfig = {
    title: "Services",
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