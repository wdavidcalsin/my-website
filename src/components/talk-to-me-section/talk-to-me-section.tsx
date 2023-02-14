import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const TalkToMeSection = () => {
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
        <FormControl>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="What's your name?"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="What's your @email"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="What do you have to tell me/offer me"
              variant="outlined"
            />
            <Button
              sx={{
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
              }}
            >
              Send it to me
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default TalkToMeSection;
