import { Social } from "@/sub-components";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsFileText } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const HomeContent = () => {
  return (
    <Stack spacing={"2.8rem"} paddingX="0" zIndex={20} paddingBottom="10rem">
      <Box
        display={"flex"}
        alignContent={"center"}
        alignItems={"center"}
        gap={"1.5rem"}
      >
        <Box
          width={"5rem"}
          height={"5rem"}
          borderWidth="3px"
          borderColor="hsl(240,80%,60%)"
          bgGradient="linear(to-l, #0633AA, #094DFF)"
          borderRadius={"50%"}
          overflow="hidden"
          display={"grid"}
          placeItems="center"
        >
          <Image
            width="100"
            height={"100"}
            src={"/image/logo-img.png"}
            alt={"logo"}
          />
        </Box>
        <Box>
          <Heading fontSize={"2.25rem"} lineHeight={"2.5rem"}>
            Willian David
          </Heading>
          <Text
            fontSize={"1.125rem"}
            display="flex"
            alignItems={"center"}
            gap="1rem"
          >
            Frontend Developer <FaCode />
          </Text>
        </Box>
      </Box>
      <Text fontSize={"1.35rem"} lineHeight={"1.75rem"}>
        Welcome! I am Willian, a frontend web developer. Check out my portfolio
        to see recent projects. Explore my site to learn more!
      </Text>
      <Box>
        <Button
          variant={"outline"}
          as="a"
          href="./docs/willian_david_calsin_borda_cv.pdf"
          target={"_blank"}
        >
          <Box width={"2rem"}>
            <BsFileText />
          </Box>{" "}
          Resume
        </Button>
      </Box>
      <Social />
    </Stack>
  );
};

export default HomeContent;
