import { AboutContent, HomeContent, Projects } from "@/components";
import { useStoreShowNavbar } from "@/store";
import { MainContainer } from "@/sub-components";
import Head from "next/head";
import { useEffect } from "react";

const ProjectPage = () => {
  const { setIsTransitionFalse } = useStoreShowNavbar((state) => state);
  useEffect(() => {
    setIsTransitionFalse();
  }, [setIsTransitionFalse]);

  return (
    <>
      <Head>
        <title>Projects - Willian David Calsin</title>
        <meta name="description" content="Projects - Willian David Calsin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo-icon-wdavid.svg" />
      </Head>
      <main>
        <MainContainer paddingTop={"12rem"}>
          <Projects />
        </MainContainer>
      </main>
    </>
  );
};

export default ProjectPage;
