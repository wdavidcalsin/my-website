import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";

const Technologies = () => {
  return (
    <Stack spacing={"1.5rem"} paddingTop="4rem">
      <Box display={"flex"} alignItems="center" gap={"1rem"}>
        <Heading fontSize={"1.2rem"}>Technologies</Heading>
        <Divider orientation="horizontal" />
      </Box>
      <Box display={"flex"} gap="2rem" fontSize={"1rem"} fontWeight="bold">
        <Box
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
            bgGradient="linear(to-l, #0633AA, #094DFF)"
            bgClip="initial"
            padding={".3rem"}
            borderRadius=".5rem"
            fontSize={"1.4rem"}
            transition="all .3s"
            color={"white"}
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "outline",
            }}
          >
            <SiTypescript style={{ borderRadius: ".2rem" }} />
          </Box>
          <Text>Typescript</Text>
        </Box>
        <Box
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
            bgGradient="linear(to-l, #0633AA, #094DFF)"
            bgClip="initial"
            padding={".3rem"}
            borderRadius=".5rem"
            fontSize={"1.4rem"}
            transition="all .3s"
            color={"white"}
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "outline",
            }}
          >
            <SiJavascript style={{ borderRadius: ".2rem" }} />
          </Box>
          <Text>Javascript</Text>
        </Box>
        <Box
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
            bgGradient="linear(to-l, #0633AA, #094DFF)"
            bgClip="initial"
            padding={".3rem"}
            borderRadius=".5rem"
            fontSize={"1.4rem"}
            transition="all .3s"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "outline",
            }}
          >
            <SiReact style={{ borderRadius: ".2rem" }} />
          </Box>
          <Text>React</Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default Technologies;
