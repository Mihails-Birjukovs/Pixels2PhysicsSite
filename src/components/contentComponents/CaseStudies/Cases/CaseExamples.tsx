import { Typography } from "@mui/material"
import type { JSX } from "react"


export interface ICaseExampleProps {
    title:string;
    showExampleIFrame?:boolean;
}

export const CaseExample = ({title, showExampleIFrame = false}:ICaseExampleProps):JSX.Element => {
    return <>
        <Typography variant="h2">{title}</Typography>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae risus auctor, tempus nunc in, efficitur mi. 
                Etiam et nibh semper, consectetur metus sit amet, ornare ligula. Nulla est ligula, volutpat pellentesque semper nec, gravida id nisi. 
                Etiam molestie justo sapien, sit amet volutpat erat facilisis at. Duis nec nisl interdum justo malesuada euismod. Nam a nunc in neque dictum pharetra. 
                Praesent consectetur dolor bibendum, fringilla diam quis, dapibus nulla. Suspendisse lacus sem, malesuada convallis facilisis ornare, mattis vitae mi. 
                Vivamus hendrerit ut velit at pellentesque.
            </p>        
            <p>
                Mauris non lectus egestas, condimentum magna vitae, elementum velit. Sed cursus, enim id rutrum ultricies, mi ligula elementum quam, eget condimentum nisl nibh ac risus. 
                Nunc auctor ipsum nec scelerisque tempor. Praesent hendrerit arcu nunc, ut tristique dolor mollis eget. Pellentesque ut nibh finibus, laoreet ex at, maximus diam. 
                Integer mollis aliquam viverra. Nam commodo faucibus magna quis eleifend.
            </p>
            {showExampleIFrame && <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=p2wwsX5MLhERUJmL" title="YouTube video player" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrer-policy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
            </div>}
            <p>
                Suspendisse potenti. Nam sed lorem diam. Etiam eu suscipit orci. Quisque ac iaculis erat. 
                Proin vulputate est ligula, quis lacinia ipsum interdum non. Aliquam sit amet commodo erat, eu varius sapien. 
                In nulla eros, mollis eu blandit id, posuere non nisl. Integer vel nisl odio. Praesent sagittis orci eget tincidunt tincidunt. 
                Nullam in elit a est placerat posuere a a urna. Maecenas libero est, volutpat non ullamcorper vel, pellentesque a leo. Ut bibendum pretium tellus ac bibendum. 
                Aliquam ultrices ultrices dolor eget consectetur. Ut commodo posuere consectetur. Praesent placerat lacus gravida lectus molestie, eu pretium lectus sagittis. 
                Vivamus sagittis eu mauris vitae tempor.
            </p>
        </div>
    </>
}