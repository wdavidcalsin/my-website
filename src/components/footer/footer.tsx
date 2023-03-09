import { MainContainer } from "@/sub-components";
import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <MainContainer>
      <Box paddingY={"7rem"}>
        <Text>
          Built with <Link href="https://nextjs.org/">Next.js</Link> ,{" "}
          <Link href="https://chakra-ui.com/">ChakraUI</Link> and{" "}
          <Link href="http://vercel.com/">Vercel</Link>
        </Text>
      </Box>
    </MainContainer>
  );
};

export default Footer;
