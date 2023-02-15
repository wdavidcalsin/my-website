import { FormToTalkToMe } from '@/sub-components';
import { Stack, Typography } from '@mui/material';

const TalkToMeSection = () => {
  return (
    <Stack spacing={2}>
      <Typography
        id="contact"
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          color: 'secondary.contrastText',
        }}
      >
        Talk to me
      </Typography>
      <Stack spacing={0.5}>
        <Typography variant="body1" sx={{ color: 'secondary.contrastText' }}>
          Do you have a project for me or a job?
          <br />
          feel free to contact me by filling the form below
        </Typography>
      </Stack>
      <Stack>
        <FormToTalkToMe />
      </Stack>
    </Stack>
  );
};

export default TalkToMeSection;
