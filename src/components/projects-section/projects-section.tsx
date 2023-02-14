import * as React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab';
import { INotionService } from '@/types';
import { notionProjectService } from '@/services';

const ProjectsSection = () => {
  const [listProject, setListProject] = React.useState<INotionService[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resultNotion = await notionProjectService();
      setListProject(resultNotion);
    };

    fetchData();
  }, []);

  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          color: 'secondary.contrastText',
        }}
      >
        projects
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {listProject.map((itemProject) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Stack
                spacing={2}
                sx={{
                  border: '1px solid',
                  borderColor: 'custom.border',
                  borderRadius: '1rem',
                  padding: '1rem',
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textTransform: 'capitalize',
                      color: 'secondary.contrastText',
                      paddingBottom: '.8rem',
                    }}
                  >
                    {itemProject.title}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Github"
                      sx={{ color: '#2D3748', bgcolor: '#CBD5E0' }}
                    />
                    <Chip
                      label="Twitter"
                      variant="outlined"
                      sx={{ color: '#2C5282', bgcolor: '#90CDF4' }}
                    />
                    <Chip
                      label="Linkedin"
                      variant="outlined"
                      sx={{ color: '#2C5282', bgcolor: '#90CDF4' }}
                    />
                  </Stack>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: 'secondary.contrastText' }}
                  >
                    {itemProject.description}
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Chip icon={<FaceIcon />} label="Site" />
                  <Chip icon={<FaceIcon />} label="Code" variant="outlined" />
                </Stack>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  );
};

export default ProjectsSection;
