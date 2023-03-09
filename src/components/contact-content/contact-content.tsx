import { useStoreShowNavbar } from "@/store";
import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactContent = () => {
  const { setIsTransitionFalse } = useStoreShowNavbar((state) => state);
  React.useEffect(() => {
    setIsTransitionFalse();
  }, []);

  return (
    <Stack>
      <Stack spacing={"2rem"}>
        <Box display={"flex"} alignItems="center" gap={"1rem"}>
          <Heading fontSize={"1.7rem"}>Contact</Heading>
          <Divider orientation="horizontal" />
        </Box>
        <Text fontSize={"1.35rem"} lineHeight={"1.75rem"}>
          You can contact me by email at david2c142 at gmail.com
        </Text>
        <UnorderedList
          fontSize={"1.2rem"}
          paddingLeft="2rem"
          lineHeight={"3rem"}
        >
          <ListItem>
            <Box display={"flex"} alignItems="center" gap={".5rem"}>
              Linkedin:
              <Link href="/" display={"flex"} alignItems="center" gap={".5rem"}>
                @wdavidcalsin{" "}
                <Box>
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
                    <FaLinkedinIn />
                  </Box>
                </Box>
              </Link>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={"flex"} alignItems="center" gap={".5rem"}>
              Github:
              <Link href="/" display={"flex"} alignItems="center" gap={".5rem"}>
                @wdavidcalsin{" "}
                <Box>
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
                    <FaGithub />
                  </Box>
                </Box>
              </Link>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={"flex"} alignItems="center" gap={".5rem"}>
              Twitter:
              <Link href="/" display={"flex"} alignItems="center" gap={".5rem"}>
                @wdavidcalsin{" "}
                <Box>
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
                    <FaTwitter />
                  </Box>
                </Box>
              </Link>
            </Box>
          </ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
};

export default ContactContent;
