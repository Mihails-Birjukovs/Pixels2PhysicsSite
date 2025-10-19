import { Grid } from "@mui/material";
import { useEffect, useState, type JSX } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { getBlogSources } from "./dataSource/blogDataSource";
import type { IBlogData } from "./models/IBlogData";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { constructFullBlogRoute } from "./blogUtils";
import styles from "./Blogs.module.scss";
import { blogRoute } from "../../../configuration/navigation";


export interface IBlogDataGroup {
    blogs:IBlogData[];
    year:string;
}

const getYear = (date?:Date) => date?.getFullYear() ?? "";

export const groupBlogs = (blogs:IBlogData[]):IBlogDataGroup[] => {
    const dictionary:{[year:string] : IBlogData[]} = {};
    blogs.forEach(blog => {
        const year = getYear(blog.publishDate);
        if(!dictionary[year]){
            dictionary[year] = [];
        }
        dictionary[year].push(blog);
    });
    const result:IBlogDataGroup[] = [];
    
    for(var key in dictionary){
        result.push({
            year:!!key ? key : "Unsorted",
            blogs:dictionary[key]
        })
    }

    return result.sort((a,b) => Number(b.year) - Number(a.year) );
}

export const Blogs = ():JSX.Element => {
    const [blogs] = useState<IBlogData[]>(getBlogSources());
    const [groupedBlogs] = useState<IBlogDataGroup[]>(groupBlogs(blogs));
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.endsWith(blogRoute.route)){
            navigate(constructFullBlogRoute(blogs[0].route));
        }
    }, []);

    return <>
        <Grid 
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
        >
           <Grid size={{xs:0, sm:0, md:3, lg:2, xl:2}} className={styles.blogNavigation}>
                <SimpleTreeView defaultSelectedItems={location.pathname}>
                    {groupedBlogs.map(blogGroup => {
                        return <TreeItem key={blogGroup.year} itemId={blogGroup.year} label={blogGroup.year}>
                            {blogGroup.blogs.map(blog => {
                                return <TreeItem key={blog.route} itemId={constructFullBlogRoute(blog.route)} label={blog.title} onClick={() => {
                                    navigate(constructFullBlogRoute(blog.route));
                                }}/>
                            })}
                        </TreeItem>
                    })}
                </SimpleTreeView>
            </Grid>
            <Grid size={{xs:12, sm:12, md:"grow", lg:"grow", xl:"grow"}}>
                <Outlet/>
            </Grid>
        </Grid>
    </>
}