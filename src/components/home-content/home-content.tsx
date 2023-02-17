import { AnimatedGradientText } from '@/styles';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';

const HomeContent = () => {
  return (
    <Box sx={{ height: '100%', paddingX: '2rem' }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt="Willian David"
          src="./avatar-img.jpg"
          sx={{ width: '5rem', height: '5rem' }}
        />
        <AnimatedGradientText
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '2.5rem',
            },
            color: 'secondary.contrastText',
          }}
        >
          Hey, I'm Willian David!
        </AnimatedGradientText>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'normal',
            fontSize: '1.5rem',
            color: 'secondary.contrastText',
          }}
        >
          I design and build apps, and everything that comes with it.
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            component="a"
            href="https://github.com/wdavidcalsin"
            target="_blank"
            label="Github"
            sx={{ color: '#2D3748', bgcolor: '#CBD5E0', cursor: 'pointer' }}
          />
          <Chip
            component="a"
            href="https://twitter.com/wdavidcalsin"
            target="_blank"
            label="Twitter"
            variant="outlined"
            sx={{ color: '#2C5282', bgcolor: '#90CDF4', cursor: 'pointer' }}
          />
          <Chip
            component="a"
            href="https://linkedin.com/in/williandavidcalsin/"
            target="_blank"
            label="Linkedin"
            variant="outlined"
            sx={{ color: '#2C5282', bgcolor: '#90CDF4', cursor: 'pointer' }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeContent;
