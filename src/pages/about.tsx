import { AboutContent, HomeContent, MetaHead, Projects } from "@/components";
import { MainContainer } from "@/sub-components";
import Head from "next/head";

const About = () => {
  return (
    <>
      <MetaHead
        title="About - Willian David Calsin"
        description="About - Willian David Calsin"
      />
      <main>
        <MainContainer paddingTop={"12rem"}>
          <AboutContent />
        </MainContainer>
      </main>
    </>
  );
};

export default About;
