import type { IRoutable } from "../../../../models/IRoutable";

export interface ICaseStudy extends IRoutable {
    pictureUrl?:string;
    description?:string;
    featuredFlag?:boolean;
}