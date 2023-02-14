import { Stack, Typography } from '@mui/material';

const AboutSection = () => {
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
          Unleashing the power of code to solve problems and make a difference -
          that's what drives me. My name is Favour Faiyetole and I am a
          passionate FullStack developer with a love for open-source and a knack
          for creating content on Instagram. When I'm not coding, you can catch
          me playing some epic video games, indulging in animated movies, or
          binging on the latest Korean thrillers.
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
      </Stack>
    </Stack>
  );
};

export default AboutSection;
