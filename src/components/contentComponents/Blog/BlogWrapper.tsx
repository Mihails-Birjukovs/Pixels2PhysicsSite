import { useTitleHook } from "../../../hooks/useTitleHook";
import type { IBlogData } from "./models/IBlogData";

export interface BlogProps extends IBlogData {}

export const BlogWrapper = (props:BlogProps) => {
    useTitleHook(`Pixels2Physics - ${props.title}`)

    return <>
        {props.page}
    </>
}


