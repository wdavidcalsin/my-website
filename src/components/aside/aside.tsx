import { Box, Stack } from '@mui/material';
import { ProjectsSection } from '../projects-section';

const Aside = () => {
  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: 'primary.main',
      }}
    >
      <Stack sx={{ paddingY: '4rem', paddingX: '3rem' }} spacing={2}>
        <ProjectsSection />
      </Stack>
    </Box>
  );
};

export default Aside;
