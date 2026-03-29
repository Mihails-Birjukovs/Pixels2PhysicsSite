import { useTitleHook } from "../../../hooks/useTitleHook";
import type { IBlogData } from "./models/IBlogData";

export interface BlogProps extends IBlogData {}

/**
 * Component that ensures change of the tab title for the each selected blog.
 * @param {BlogProps} props which contains all of the neccesary info to render and handle blog.
 * @returns 
 */
export const BlogWrapper = (props:BlogProps) => {
    useTitleHook(`Pixels2Physics - ${props.title}`);

    return <>
        {props.page}
    </>
}


