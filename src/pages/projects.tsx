import { MetaHead, Projects } from "@/components";
import { notionProjectService } from "@/services";
import { useStoreShowNavbar } from "@/store";
import { MainContainer } from "@/sub-components";
import { INotionPropertiesService } from "@/types";
import * as React from "react";
interface IPropsProjectPage {
  projects: INotionPropertiesService[];
}

const ProjectPage = ({ projects }: IPropsProjectPage) => {
  const { setIsTransitionFalse } = useStoreShowNavbar((state) => state);
  React.useEffect(() => {
    setIsTransitionFalse();
  }, [setIsTransitionFalse]);

  return (
    <>
      <MetaHead
        title="Projects - Willian David Calsin"
        description="Projects - Willian David Calsin"
      />
      <main>
        <MainContainer paddingTop={"12rem"}>
          <Projects projects={projects} />
        </MainContainer>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const projects = await notionProjectService();

  return {
    props: {
      projects,
    },
  };
}

export default ProjectPage;
