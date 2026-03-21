import { useEffect, useMemo } from "react"

/**
 * This hook ensures, that html document title tag has value related to the current content of the SPA.
 * @param title - Value of the title to be set.
 */
export const useTitleHook = (title:string) => {
    //If there is more than 1 title element, the HTML is malformed.
    const titleElement = useMemo(() => document.getElementsByTagName("title")[0], []);
    useEffect(() => {
        titleElement.innerHTML = title;
    }, [title])
}