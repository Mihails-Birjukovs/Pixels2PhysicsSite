import { Typography } from "@mui/material";
import type { JSX } from "react";

export const About = ():JSX.Element => {
    return <>
        <Typography variant="h4">About myself:</Typography>
        <img src="https://avatars.githubusercontent.com/u/75037455"></img>
        <p>
            Nunc cursus eros in elit gravida, in consectetur est varius. In facilisis magna et felis porta molestie. 
            Curabitur a magna ligula. Nunc at interdum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Sed eu lacinia leo. Quisque leo nisi, luctus nec gravida vel, placerat lacinia neque. 
            Maecenas vulputate, arcu eget scelerisque pellentesque, ligula nulla fringilla mauris, eget ornare eros ante in mauris. 
            Aliquam vestibulum, urna quis porttitor porttitor, nisl neque aliquet neque, ut finibus justo est vel lacus. 
            Vivamus mollis felis nibh, at porttitor justo facilisis a. Proin mattis justo sed rutrum egestas. 
            Etiam tincidunt tincidunt condimentum. Sed eget risus sed arcu blandit rutrum eu dignissim justo. Donec id justo nec odio viverra lobortis.
            Aenean egestas mattis dictum.
        </p>
    </>
}