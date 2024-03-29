import { useStoreShowNavbar } from "@/store";
import { Technologies } from "@/sub-components";
import { Box, Button, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFileText } from "react-icons/bs";

const AboutContent = () => {
  const { setIsTransitionFalse } = useStoreShowNavbar((state) => state);
  React.useEffect(() => {
    setIsTransitionFalse();
  }, [setIsTransitionFalse]);

  return (
    <Stack>
      <Stack spacing={"2rem"}>
        <Box display={"flex"} alignItems="center" gap={"1rem"}>
          <Heading fontSize={"1.7rem"}>About</Heading>
          <Divider orientation="horizontal" />
        </Box>
        <Text fontSize={"1.35rem"} lineHeight={"1.75rem"}>
          Welcome to my digital garden where I share what I am learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </Text>
      </Stack>
      <Technologies />
    </Stack>
  );
};

export default AboutContent;
