import { Box, Stack } from '@mui/material';
import { AboutSection } from '../about-section';
import { ProjectsSection } from '../projects-section';
import { TalkToMeSection } from '../talk-to-me-section';

const Aside = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: {
          xs: '100%',
          sm: '100%',
          md: '50%',
          lg: '50%',
        },
        minHeight: '100vh',
      }}
    >
      <Stack
        sx={{
          paddingY: '4rem',
          paddingX: {
            xs: '1rem',
            sm: '1rem',
            md: '3rem',
            lg: '3rem',
          },
        }}
        spacing={5}
      >
        <ProjectsSection />
        <AboutSection />
        <TalkToMeSection />
      </Stack>
    </Box>
  );
};

export default Aside;
