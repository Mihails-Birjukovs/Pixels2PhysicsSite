import { Box, Typography } from "@mui/material";
import { useEffect, useState, type JSX } from "react";
import { CaseStudiesCardCollection } from "../CaseStudies/CaseStudiesCardCollection";
import type { ICaseStudy } from "../CaseStudies/CaseStudiesCard";
import { GetCaseSources } from "../CaseStudies/dataSource/caseStudySource";
import styles from "./Home.module.scss";

export const Home = ():JSX.Element => {
     const [featuredStudies, setFeaturedStudies] = useState<ICaseStudy[]>([]) ;
    useEffect(() => {
        //Filter the studies here, or change the procurement.
        const allStudies = GetCaseSources();
        const featuredStudies = allStudies.filter(as => as.featuredFlag);
        setFeaturedStudies(featuredStudies);
    }, []);

    return <>
        <Box>
            <Typography variant="h4">Welcome, to Pixel2Physics!</Typography>
            <p>
                Here you can find answers to your image processing problems!
            </p>
            {featuredStudies.length > 0 && (<><Typography variant="h6">Featured studies</Typography>
            <Box className={styles.caseWrapper}>
                <CaseStudiesCardCollection
                    cards={featuredStudies}
                    cardLimit={3}
                />
            </Box></>)}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui pellentesque, fermentum ex vitae, placerat lectus. 
                Maecenas varius mi sit amet felis cursus rhoncus. Pellentesque vitae arcu est. Vestibulum dui tellus, consectetur in vestibulum efficitur, euismod a dolor. 
                Donec mollis urna quis justo dapibus, ac congue justo tincidunt. Integer dui diam, convallis vitae ultrices et, ultricies non nunc. 
                Integer tempor euismod purus, ac commodo nisl ornare ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                Duis varius ante tortor, nec condimentum ligula iaculis vitae. Sed sit amet rutrum ipsum.
            </p>
            <p>
                In mi nibh, aliquet in purus in, efficitur varius arcu. Proin dapibus purus ac pharetra suscipit. 
                Donec varius dignissim augue, eu lacinia nulla porttitor vel. Nam sit amet mauris molestie, suscipit est ac, semper eros. 
                Aenean accumsan, nulla ac molestie ultricies, ante elit ullamcorper tellus, at sagittis metus turpis laoreet risus.
                Suspendisse ut dui ultricies, malesuada elit ac, dictum turpis. Aliquam sit amet ornare justo. 
                Phasellus pretium sapien justo, et facilisis risus imperdiet in. Curabitur a porta diam. Sed nec arcu elit. Aenean in imperdiet dolor...
            </p>
        </Box>
    </>
}