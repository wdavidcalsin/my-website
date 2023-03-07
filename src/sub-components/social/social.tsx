import { Box, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <Box display={"flex"} gap="2rem" fontSize={"1rem"} fontWeight="bold">
      <Link
        href={"/"}
        display={"flex"}
        gap=".5rem"
        alignItems={"center"}
        alignContent="center"
        _hover={{
          transform: "scale(1.1)",
          transition: "all .2s ease-out",
        }}
      >
        <Box
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
        >
          <FaGithub fontSize={"1.4rem"} />
        </Box>
        <Text>Github</Text>
      </Link>
      <Link
        href={"/"}
        display={"flex"}
        gap=".5rem"
        alignItems={"center"}
        alignContent="center"
        _hover={{
          transform: "scale(1.1)",
          transition: "all .2s ease-out",
        }}
      >
        <Box
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
        >
          <FaLinkedinIn fontSize={"1.4rem"} />
        </Box>
        <Text>Linkedin</Text>
      </Link>
      <Link
        href={"/"}
        display={"flex"}
        gap=".5rem"
        alignItems={"center"}
        alignContent="center"
        _hover={{
          transform: "scale(1.1)",
          transition: "all .2s ease-out",
        }}
      >
        <Box
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
        >
          <FaTwitter fontSize={"1.4rem"} />
        </Box>
        <Text>Twitter</Text>
      </Link>
    </Box>
  );
};

export default Social;
