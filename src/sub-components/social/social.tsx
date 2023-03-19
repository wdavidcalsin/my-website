import { Box, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <Box
      display={"flex"}
      gap="2rem"
      fontSize={"1rem"}
      fontWeight="bold"
      flexWrap={"wrap"}
    >
      <Link
        href={"https://github.com/wdavidcalsin"}
        display={"flex"}
        target="_blank"
        gap=".5rem"
        alignItems={"center"}
        alignContent="center"
        transition="all .2s ease-out"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <Box
          bgGradient="linear(to-l, #000000, #1F1F1F)"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
          fontSize={"1.4rem"}
          transition="all .3s"
          color="white"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "outline",
          }}
        >
          <FaGithub />
        </Box>
        <Text>Github</Text>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/williandavidcalsin/"}
        target="_blank"
        display={"flex"}
        gap=".5rem"
        alignItems={"center"}
        alignContent="center"
        transition="all .2s "
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <Box
          bgGradient="linear(to-l, #004F78, #0077B5 )"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
          transition="all .3s"
          color="white"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "outline",
          }}
        >
          <FaLinkedinIn fontSize={"1.4rem"} />
        </Box>
        <Text>Linkedin</Text>
      </Link>
      <Link
        href={"https://twitter.com/wdavidcalsin"}
        target="_blank"
        display={"flex"}
        gap=".5rem"
        alignItems={"center"}
        alignContent="center"
        transition="all .2s ease-out"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <Box
          bgGradient="linear(to-l, #1D6CF2, #1DA1F2)"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
          transition="all .3s"
          color="white"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "outline",
          }}
        >
          <FaTwitter fontSize={"1.4rem"} />
        </Box>
        <Text>Twitter</Text>
      </Link>
    </Box>
  );
};

export default Social;
