import { DashBackground, GradientBackground } from "@/sub-components";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: IPropsLayout) => {
  return (
    <Box minHeight={"100vh"} bg="transparent">
      <DashBackground />
      <Navbar />
      <Box>{children}</Box>
      <Footer />
      <GradientBackground />
    </Box>
  );
};

export default Layout;
