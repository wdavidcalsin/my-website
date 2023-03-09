import { setProjects, storeNotionProjects } from "@/store";
import { Box, Divider, Heading, Kbd, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { useSnapshot } from "valtio";

const Projects = () => {
  const snap = useSnapshot(storeNotionProjects);

  React.useEffect(() => {
    setProjects();
  }, []);

  return (
    <Stack spacing={"2rem"} paddingTop="10rem">
      <Box display={"flex"} alignItems="center" gap={"1rem"}>
        <Heading fontSize={"1.7rem"}>Projects</Heading>
        <Divider orientation="horizontal" />
      </Box>
      <Stack spacing={"1.8rem"}>
        {snap.projects.map((project, index) => (
          <Stack
            key={index}
            spacing={"1rem"}
            paddingY="1.7rem"
            paddingX="1.5rem"
            bgColor={"hsla(0,0%,100%,.08)"}
            borderRadius=".7rem"
            transition={"all .3s"}
            _hover={{
              bgColor: "rgba(256,256,256,.2)",
            }}
          >
            <Heading fontSize={"1.4rem"}>{project.title}</Heading>
            <Box display={"flex"} gap=".5rem">
              {project.tags.map((tag, indexTag) => (
                <span key={indexTag}>
                  <Kbd>{tag}</Kbd>
                </span>
              ))}
            </Box>
            <Text fontSize={"1.1rem"} lineHeight="1.75rem">
              {project.description}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
