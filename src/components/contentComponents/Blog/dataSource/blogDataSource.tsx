import { ExampleBlog } from "../Blogs/ExampleBlog"
import type { IBlogData } from "../models/IBlogData"


export const getBlogSources = ():IBlogData[] =>{ return [
    {
        route: "/TestBlog1",
        title: "Test blog I",
        publishDate: new Date(2024, 3),
        page: <ExampleBlog title="Test blog I"/>
    },
    {
        route: "/TestBlog2",
        title: "Test blog II",
        publishDate: new Date(2024, 8),
        page: <ExampleBlog title="Test blog II"/>
    },
    {
        route: "/TestBlog3",
        title: "Test blog III",
        publishDate: new Date(2024, 11),
        page: <ExampleBlog title="Test blog III"/>
    },
    {
        route: "/TestBlog4",
        title: "Test blog IV",
        publishDate: new Date(2025, 10),
        page: <ExampleBlog title="Test blog IV"/>
    }
].sort((a,b) => (a?.publishDate?.getMilliseconds() ?? 0) - (b?.publishDate?.getMilliseconds() ?? 0))}