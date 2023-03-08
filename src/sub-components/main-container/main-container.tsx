import { Container, StyleProps } from "@chakra-ui/react";
import * as React from "react";

interface PropContainer extends StyleProps {
  children: React.ReactNode;
}

const MainContainer = ({ children, ...restProps }: PropContainer) => {
  return (
    <Container maxW="container.sm" {...restProps}>
      {children}
    </Container>
  );
};

export default MainContainer;
