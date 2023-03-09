import { Box } from "@chakra-ui/react";
import { useWindowScroll } from "react-use";

const GradientBackground = () => {
  const { y } = useWindowScroll();

  return (
    <Box
      minHeight={"100vh"}
      pointerEvents="none"
      position="absolute"
      inset="0"
      overflow="hidden"
    >
      <Box
        height={"100%"}
        backgroundPosition="top"
        backgroundRepeat={"no-repeat"}
        opacity="0.3"
        backgroundImage={"/bg_gradient.jfif"}
        bgSize="cover"
        style={{
          transform: `translateY(${Math.min(y / 3, 167)}px)`,
        }}
      ></Box>
    </Box>
  );
};

export default GradientBackground;
