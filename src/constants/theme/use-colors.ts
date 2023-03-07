import { useColorModeValue } from "@chakra-ui/react";

export const useColors = () => {
  const bgPrimary = useColorModeValue("#FFFFFF", "#1B1B1E");
  const bgSecondary = useColorModeValue("#FFFFFF", "#3B3436");
  const textPrimary = useColorModeValue("#1B1B1E", "#E2BFC5");
  const txtSecondary = useColorModeValue("#27272A", "#C4AEAE");
  const customPrimary = useColorModeValue("#312E81", "#312E81");
  const customSecondary = useColorModeValue("#D8D8D9", "#3F3F46");

  return {
    bgPrimary,
    bgSecondary,
    textPrimary,
    txtSecondary,
    customPrimary,
    customSecondary,
  };
};
