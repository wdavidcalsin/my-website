import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdOutlineClearAll } from "react-icons/md";
import * as React from "react";

const ViewAllProjects = () => {
  return (
    <Box paddingTop={"2rem"}>
      <Link
        as={NextLink}
        href="/projects"
        display={"flex"}
        alignItems="center"
        gap={".8rem"}
      >
        <Box
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="initial"
          padding={".3rem"}
          borderRadius=".5rem"
          transition="all .3s"
          fontSize={"1rem"}
          color="white"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "outline",
          }}
        >
          <MdOutlineClearAll />
        </Box>
        <Text fontSize={"1rem"}>View all projects</Text>
      </Link>
    </Box>
  );
};

export default ViewAllProjects;
