import { HomeContent, MetaHead, Projects } from '@/components';
import { notionProjectService } from '@/services';
import { useStoreShowNavbar } from '@/store';
import { MainContainer, ViewAllProjects } from '@/sub-components';
import { INotionPropertiesService } from '@/types';
import { Box } from '@chakra-ui/react';
import * as React from 'react';

interface IPropsHome {
    projects: INotionPropertiesService[];
}

function Home({ projects }: IPropsHome) {
    const { setIsTransitionTrue } = useStoreShowNavbar((state) => state);

    React.useEffect(() => {
        setIsTransitionTrue();
    }, [setIsTransitionTrue]);

    return (
        <>
            <MetaHead title="Home - Willian David Calsin" description="Home - Willian David Calsin" />
            <Box>
                <MainContainer paddingTop={'12rem'}>
                    <HomeContent />
                    <Projects projects={projects} />
                    <ViewAllProjects />
                </MainContainer>
            </Box>
        </>
    );
}

export async function getStaticProps() {
    const res = await notionProjectService();

    const projects = res.filter((project) => Number(project.point) >= 7);

    return {
        props: {
            projects,
        },
    };
}

export default Home;
