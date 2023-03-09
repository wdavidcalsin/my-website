import { Social } from "@/sub-components";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

const HomeContent = () => {
  return (
    <Stack spacing={"2.8rem"} paddingX="0" zIndex={20}>
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
          bgGradient="linear(to-l, #7928CA, #CC6A8A)"
          borderRadius={"50%"}
          overflow="hidden"
          display={"grid"}
          placeItems="center"
        >
          <Image
            width="100"
            height={"100"}
            src={"/image/logo-img4-copy.png"}
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
        Welcome to my digital garden where I share what I am learning about
        shipping great products, becoming a better developer and growing a
        career in tech.
      </Text>
      <Social />
    </Stack>
  );
};

export default HomeContent;
