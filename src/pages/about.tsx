import { AboutContent, HomeContent, Projects } from "@/components";
import { MainContainer } from "@/sub-components";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Willian David Calsin</title>
        <meta name="description" content="About - Willian David Calsin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo-img4-copy.png" />
      </Head>
      <main>
        <MainContainer paddingTop={"12rem"}>
          <AboutContent />
        </MainContainer>
      </main>
    </>
  );
};

export default About;
