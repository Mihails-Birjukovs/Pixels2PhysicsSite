import { Grid } from "@mui/material";
import { useState, type JSX } from "react";
import { Outlet, useNavigate } from "react-router";
import { getBlogSources } from "./dataSource/blogDataSource";
import type { IBlogData } from "./models/IBlogData";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { constructFullBlogRoute } from "./blogUtils";
import styles from "./Blog.module.scss";

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

export const Blog = ():JSX.Element => {
    const [blogs] = useState<IBlogDataGroup[]>(groupBlogs(getBlogSources()));
    const navigate = useNavigate();

    return <>
        <Grid 
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
        >
           <Grid size={{xs:0, sm:0, md:3, lg:2, xl:2}} className={styles.blogNavigation}>
                <SimpleTreeView>
                    {blogs.map(blogGroup => {
                        return <TreeItem key={blogGroup.year} itemId={blogGroup.year} label={blogGroup.year}>
                            {blogGroup.blogs.map(blog => {
                                return <TreeItem key={blog.route} itemId={blog.route} label={blog.title}  onClick={() => {
                                    navigate(constructFullBlogRoute(blog.route));
                                }}/>
                            })}
                        </TreeItem>
                    })}
                </SimpleTreeView>
            </Grid>
            <Grid size={{xs:12, sm:12, md:9, lg:10, xl:10}}>
                <Outlet/>
            </Grid>
        </Grid>
    </>
}