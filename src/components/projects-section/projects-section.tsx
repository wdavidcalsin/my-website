import { ProjectItem } from '@/sub-components';
import { Stack, Typography } from '@mui/material';

const ProjectsSection = () => {
  return (
    <Stack spacing={2}>
      <Typography
        id="projects"
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          color: 'secondary.contrastText',
        }}
      >
        projects
      </Typography>
      <ProjectItem />
    </Stack>
  );
};

export default ProjectsSection;
