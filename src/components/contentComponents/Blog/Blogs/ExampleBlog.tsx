import { Typography } from "@mui/material";
import type { JSX } from "react";

export interface IExampleBlogProps{
    title:string;
}

export const ExampleBlog = (props:IExampleBlogProps):JSX.Element => {
    return <>
        <Typography variant="h2">{props.title}</Typography>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a velit vitae nibh convallis malesuada. 
            Donec sagittis sodales sapien, a rutrum lorem posuere tempor. Sed eu egestas nunc. 
            Vivamus urna nunc, aliquam eget sem vitae, luctus iaculis arcu. Vestibulum quam mauris, aliquet ac odio vel, dignissim lacinia lectus. 
            Vestibulum nibh est, lacinia at dolor vitae, cursus elementum neque. Ut bibendum neque at odio commodo, eget convallis justo aliquet. 
            Quisque feugiat consectetur ante eu rhoncus. Proin nec viverra ipsum, eget luctus turpis. Aenean nec mollis ex. Nunc vitae dignissim odio. 
            Nulla vel eros ut diam lacinia accumsan at at ante. 
            Curabitur at justo nibh. Aenean quis tempus velit, in congue tellus. Aliquam iaculis lorem eget sapien pulvinar tincidunt. 
            Mauris cursus facilisis justo et congue.
        </p>
    </>
}
