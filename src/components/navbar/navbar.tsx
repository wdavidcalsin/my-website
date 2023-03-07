import { LogoIconWdavid } from "@/sub-components";
import { Box, Container, Link, useColorMode } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="container.sm"
      height={"4rem"}
      bgColor={"hsla(0,0%,100%,.08)"}
      display="grid"
      placeItems={"center"}
      borderRadius="1rem"
      boxShadow="md"
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignContent="center"
        alignItems={"center"}
        width="100%"
      >
        <Box width={"4rem"}>
          <LogoIconWdavid />
        </Box>
        <Box display={"flex"} alignItems="center" gap={"1rem"}>
          <Box
            display={"flex"}
            gap="1rem"
            fontWeight={"extrabold"}
            fontSize="1.1rem"
          >
            <Link href={"/"}>Projects</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </Box>
          <Box
            fontSize={"1.7rem"}
            transition="all .2s"
            cursor={"pointer"}
            _hover={{
              transform: "scale(1.2)",
            }}
            onClick={toggleColorMode}
          >
            <BsSunFill />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
