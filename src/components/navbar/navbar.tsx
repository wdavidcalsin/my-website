import { LogoIconWdavid } from "@/sub-components";
import { Box, Container, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container
      maxW="container.sm"
      height={"4rem"}
      bgColor={"hsla(0,0%,100%,.03)"}
      display="grid"
      placeItems={"center"}
      borderRadius="1rem"
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignContent="center"
        alignItems={"center"}
        width="100%"
      >
        <Box width={"3rem"}>
          <LogoIconWdavid />
        </Box>
        <Box display={"flex"} gap="1rem">
          <Link href={"/"}>Projects</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
