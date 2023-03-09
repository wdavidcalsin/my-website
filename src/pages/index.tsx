import { HomeContent, Projects } from "@/components";
import { useStoreShowNavbar } from "@/store";
import { MainContainer, ViewAllProjects } from "@/sub-components";
import Head from "next/head";
import { useEffect } from "react";
import {} from "zustand";

export default function Home() {
  const { setIsTransitionTrue } = useStoreShowNavbar((state) => state);
  useEffect(() => {
    setIsTransitionTrue();
  }, [setIsTransitionTrue]);

  return (
    <>
      <Head>
        <title>Home - Willian David Calsin</title>
        <meta name="description" content="Home - Willian David Calsin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo-icon-wdavid.svg" />
      </Head>
      <main>
        <MainContainer paddingTop={"12rem"}>
          <HomeContent />
          <Projects projectType="best" />
          <ViewAllProjects />
        </MainContainer>
      </main>
    </>
  );
}
