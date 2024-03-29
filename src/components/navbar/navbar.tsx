import { useStoreShowNavbar } from "@/store";
import { LogoIconWdavid, MainContainer } from "@/sub-components";
import {
  Box,
  Collapse,
  Link as ChakraLink,
  ScaleFade,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { BsSunFill } from "react-icons/bs";
import { useWindowScroll } from "react-use";
import { ActiveLink } from ".";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = React.useState<boolean>(false);
  const { isTransition, setIsTransitionTrue } = useStoreShowNavbar(
    (state) => state
  );

  const { y } = useWindowScroll();

  const handleScrollNavbar = React.useCallback(() => {
    if (y > 250) {
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
      <MainContainer>
        <ScaleFade
          initialScale={0.7}
          in={isShowNav}
          style={{
            pointerEvents: "auto",
            backdropFilter: "blur(10px)",
            willChange: "transform",
            borderRadius: ".7rem",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignContent="center"
            alignItems={"center"}
            width="100%"
            height={"4rem"}
            bgColor={"hsla(0,0%,100%,.08)"}
            borderRadius=".7rem"
            boxShadow="md"
            paddingX={"1rem"}
          >
            <ChakraLink as={NextLink} href="/" width={"4rem"}>
              <LogoIconWdavid />
            </ChakraLink>
            <Box display={"flex"} alignItems="center" gap={"1rem"}>
              <Box
                display={"flex"}
                gap="1rem"
                fontWeight={"extrabold"}
                fontSize="1.1rem"
              >
                <ActiveLink href={"/projects"}>Projects</ActiveLink>
                <ActiveLink href={"/about"}>About</ActiveLink>
                <ActiveLink href={"/contact"}>Contact</ActiveLink>
              </Box>
              {/* <Box
                fontSize={"1.7rem"}
                transition="all .2s"
                cursor={"pointer"}
                _hover={{
                  transform: "scale(1.2)",
                }}
                onClick={toggleColorMode}
              >
                <BsSunFill />
              </Box> */}
            </Box>
          </Box>
        </ScaleFade>
      </MainContainer>
    </Box>
  );
};

export default Navbar;
