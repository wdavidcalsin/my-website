import { ContactContent } from "@/components";
import { MainContainer } from "@/sub-components";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Willian David Calsin</title>
        <meta name="description" content="Contact - Willian David Calsin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo-icon-wdavid.svg" />
      </Head>
      <main>
        <MainContainer paddingTop={"12rem"}>
          <ContactContent />
        </MainContainer>
      </main>
    </>
  );
};

export default Contact;
