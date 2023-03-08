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
        backgroundImage={
          "https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9"
        }
        bgSize="cover"
        style={{
          transform: `translateY(${Math.min(y / 3, 167)}px)`,
        }}
      ></Box>
    </Box>
  );
};

export default GradientBackground;
