import { Box } from "@mui/material";
import type { JSX } from "react";

export const Services = ():JSX.Element => {
    return <>
        Services.
        <Box>
            Test 2.
        </Box>
        <Box>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/v7K4vGYL9zI?si=X7GPyc6ydxb_PNB8" 
                title="YouTube video player" 
                frame-border="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrer-policy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
        </Box>
    </>
}