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

const ProjectsSection = () => {
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
                  dictionary
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
                  Code Magic is an open-source application that simplifies and
                  saves users time and effort during the project creation
                  process by providing a user-friendly tool for creating
                  projects with advanced CSS features.
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="Site" />
                <Chip icon={<FaceIcon />} label="Code" variant="outlined" />
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
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
                  dictionary
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
                  Code Magic is an open-source application that simplifies and
                  saves users time and effort during the project creation
                  process by providing a user-friendly tool for creating
                  projects with advanced CSS features.
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="Site" />
                <Chip icon={<FaceIcon />} label="Code" variant="outlined" />
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Willian David</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
};

export default ProjectsSection;
