import { useTitleHook } from "../../../hooks/useTitleHook";
import type { ICaseStudy } from "./models/ICaseStudyData";

export interface CaseWrapperProps extends ICaseStudy {}

export const CaseWrapper = (props:CaseWrapperProps) => {
    useTitleHook(`Pixels2Physics - ${props.title}`);

    return <>
        {props.page}
    </>
}