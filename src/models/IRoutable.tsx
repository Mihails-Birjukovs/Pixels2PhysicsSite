import type { JSX } from "react";

export interface IRoutable {
    title:string;
    route:string;
    page?:JSX.Element;
    childRoutes?:JSX.Element[]
}