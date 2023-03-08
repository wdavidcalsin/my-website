import { useStoreShowNavbar } from "@/store";
import { LogoIconWdavid } from "@/sub-components";
import { Box, Collapse, Container, Link, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { BsSunFill } from "react-icons/bs";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = React.useState<boolean>(false);
  const { isTransition, setIsTransitionTrue } = useStoreShowNavbar(
    (state) => state
  );
  const { toggleColorMode } = useColorMode();

  const { y } = useWindowScroll();

  const handleScrollNavbar = React.useCallback(() => {
    if (y > 300) {
      setIsShowNav(true);
    } else {
      setIsShowNav(false);
    }
  }, [y]);

  React.useEffect(() => {
    isTransition ? handleScrollNavbar() : setIsShowNav(true);
  }, [y, handleScrollNavbar, isTransition]);

  return (
    <Box
      pointerEvents={"none"}
      position="fixed"
      top={"6"}
      zIndex="30"
      width={"full"}
    >
      <Collapse
        style={{ pointerEvents: "auto", backdropFilter: "blur" }}
        in={isShowNav}
      >
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
      </Collapse>
    </Box>
  );
};

export default Navbar;
