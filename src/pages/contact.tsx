import { ContactContent, MetaHead } from "@/components";
import { MainContainer } from "@/sub-components";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <MetaHead
        title="Contact - Willian David Calsin"
        description="Contact - Willian David Calsin"
      />
      <main>
        <MainContainer paddingTop={"12rem"}>
          <ContactContent />
        </MainContainer>
      </main>
    </>
  );
};

export default Contact;
