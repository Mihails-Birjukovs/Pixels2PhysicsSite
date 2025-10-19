import { CaseStandaloneExample } from "../Cases/CaseStandaloneExample";
import { CaseExample } from "../Cases/CaseExamples";
import { CasePractice } from "../Cases/CasePractice";
import type { ICaseStudy } from "../models/ICaseStudyData";

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere nec nunc vel pulvinar. 
Vestibulum consectetur aliquet velit, ac semper nunc lobortis in. 
Nam mi ligula, rhoncus vel diam a, luctus ultrices felis. 
Aliquam quis ligula porttitor, pharetra risus nec, dapibus massa.`;

export const getCaseSources = ():ICaseStudy[] =>{ return [
    {
        title: "Case standalone example",
        route: "/CoolCase",
        description: lipsum,
        pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Symbol_thumbs_up.svg/765px-Symbol_thumbs_up.svg.png",
        featuredFlag: true,
        page: <CaseStandaloneExample/>
    },
    {
        title: "Cool Case 2",
        route: "/CoolCase2",
        description: lipsum,
        pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Symbol_thumbs_up.svg/765px-Symbol_thumbs_up.svg.png",
        page: <CaseExample title="Cool Case 2"/>
    },
    {
        title: "Not so cool case",
        route: "/NotCoolCase",
        description: lipsum,
        pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Symbol_thumbs_down.svg",
        featuredFlag: true,
        page: <CaseExample title="Not so cool case"/>
    },
    {
        title: "Yet another case",
        route: "/AnotherCase",
        description: lipsum,
        pictureUrl: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/photo-image/exposure-plus-1-fill-1tm1r33wcekn1joqb1w0r.png/exposure-plus-1-fill-v3l27uzqvn8333ih7nmkhc.png?_a=DATAg1AAZAA0",
        page: <CaseExample title="Yet another case"/>
    },
    {
        title: "Where Picture?",
        route: "/Pictureless",
        description: lipsum,
        pictureUrl: "",
        page: <CaseExample title="Where Picture?" showExampleIFrame={true}/>
    },
    {
        title: "Where Picture 2,",
        route: "/Pictureless2",
        description: lipsum,
        pictureUrl: "",
        featuredFlag: true,
        page: <CaseExample title="Where Picture 2?" showExampleIFrame={true}/>
    },
    {
        title: "Where Code Structure Awareness",
        route: "/Clueless",
        description: lipsum,
        pictureUrl: "https://manofmany.com/_next/image?url=https%3A%2F%2Fapi.manofmany.com%2Fwp-content%2Fuploads%2F2024%2F01%2FCBS.jpg&w=1200&q=75",
        page: <CasePractice/>
    }
]}