import { notionProjectService } from '@/services';
import { INotionServiceProjects } from '@/types';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Chip, Stack, Typography } from '@mui/material';
import * as React from 'react';

const ProjectItem = () => {
  const [listProject, setListProject] = React.useState<
    INotionServiceProjects[]
  >([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resultNotion = await notionProjectService();
      setListProject(resultNotion);
    };

    fetchData();
  }, []);
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {listProject.map((itemProject, index) => (
        <TimelineItem key={index}>
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
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: '2' }}>
                  {itemProject.tags.map((tag) => (
                    <Chip
                      label={tag}
                      sx={{
                        color: '#2D3748',
                        bgcolor: '#CBD5E0',
                        marginRight: '.2rem',
                        marginTop: '.2rem',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: 'secondary.contrastText', lineHeight: 1.8 }}
                >
                  {itemProject.description}
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Chip
                  component="a"
                  href={itemProject.site}
                  target="_blank"
                  icon={<LanguageIcon />}
                  label="Site"
                  sx={{ cursor: 'pointer' }}
                />
                <Chip
                  component="a"
                  href={itemProject.link_code}
                  target="_blank"
                  icon={<CodeIcon />}
                  label="Code"
                  variant="outlined"
                  sx={{ cursor: 'pointer' }}
                />
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProjectItem;
