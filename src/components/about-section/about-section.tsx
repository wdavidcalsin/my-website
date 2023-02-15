import { notionTechnologiesService } from '@/services';
import { IconsTechnologiesSubComponents } from '@/sub-components/icons';
import { INotionServiceTechnologies } from '@/types';
import { Box, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';

const AboutSection = () => {
  const [listTechnology, setListTechnology] = React.useState<
    INotionServiceTechnologies[]
  >([]);

  React.useEffect(() => {
    const fetchDataTechnology = async () => {
      const resultNotionTechnology = await notionTechnologiesService();

      setListTechnology(resultNotionTechnology);
    };

    fetchDataTechnology();
  }, []);

  return (
    <Stack spacing={1}>
      <Stack spacing={1}>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            color: 'secondary.contrastText',
          }}
        >
          about
        </Typography>
        <Typography variant="body1" sx={{ color: 'secondary.contrastText' }}>
          As a FullStack developer, I enjoy using my programming skills to
          create innovative and useful solutions that solve problems and make a
          difference. My name is Willian David and, when I'm not programming, I
          find myself learning guitar, exploring new technologies, and
          participating in programming communities to continually improve my
          skills and knowledge.
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.1rem',
            color: 'secondary.contrastText',
          }}
        >
          Technologies i currently work with:
        </Typography>
        <Grid container sx={{ gap: 2 }}>
          {listTechnology.map((technology, index) => {
            return (
              <Grid item key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                  }}
                >
                  <IconsTechnologiesSubComponents name={technology.slug} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'secondary.contrastText',
                      fontWeight: 'bold',
                      fontSize: '.6rem',
                    }}
                  >
                    {technology.name}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default AboutSection;
