import { DashBackground, GradientBackground } from "@/sub-components";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Navbar } from "../navbar";

interface IPropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: IPropsLayout) => {
  return (
    <>
      <DashBackground />
      <Navbar />
      <Box>{children}</Box>
      <GradientBackground />
    </>
  );
};

export default Layout;
