import { Box, Stack } from '@mui/material';
import { ProjectsSection } from '../projects-section';

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
        alignSelf: 'flex-end',
      }}
    >
      <Stack sx={{ paddingY: '4rem', paddingX: '3rem' }} spacing={2}>
        <ProjectsSection />
      </Stack>
    </Box>
  );
};

export default Aside;
