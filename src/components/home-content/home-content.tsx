import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';

const HomeContent = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

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
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: '2rem',
            color: 'secondary.contrastText',
          }}
        >
          Hey, I'm Willian David!
        </Typography>
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
            label="Github"
            onClick={handleClick}
            sx={{ color: '#2D3748', bgcolor: '#CBD5E0' }}
          />
          <Chip
            label="Twitter"
            variant="outlined"
            onClick={handleClick}
            sx={{ color: '#2C5282', bgcolor: '#90CDF4' }}
          />
          <Chip
            label="Linkedin"
            variant="outlined"
            onClick={handleClick}
            sx={{ color: '#2C5282', bgcolor: '#90CDF4' }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeContent;
