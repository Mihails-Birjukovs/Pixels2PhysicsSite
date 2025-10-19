import type { IRoutable } from "../../../../models/IRoutable";

export interface IBlogData extends IRoutable {
    publishDate?:Date;
}