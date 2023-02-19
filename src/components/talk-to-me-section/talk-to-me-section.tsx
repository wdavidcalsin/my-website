import { UlContactItems } from '@/styles';
import { Link, Stack, Typography } from '@mui/material';

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
        Contact
      </Typography>
      <Stack spacing={0.5}>
        <Typography variant="body1" sx={{ color: 'secondary.contrastText' }}>
          You can contact me by email at
          <i> david2c142 at gmail.com</i>
        </Typography>
      </Stack>
      <UlContactItems>
        <li>
          Linkedin:{' '}
          <Link
            sx={{ color: 'custom.text2' }}
            href="https://www.linkedin.com/in/williandavidcalsin/"
            target="_blank"
          >
            @wdavidcalsin
          </Link>
        </li>
        <li>
          Github:{' '}
          <Link
            sx={{ color: 'custom.text2' }}
            href="https://github.com/wdavidcalsin"
            target="_blank"
          >
            @wdavidcalsin
          </Link>
        </li>
        <li>
          Twitter:{' '}
          <Link
            sx={{ color: 'custom.text2' }}
            href="https://twitter.com/wdavidcalsin"
            target="_blank"
          >
            @wdavidcalsin
          </Link>
        </li>
      </UlContactItems>
    </Stack>
  );
};

export default TalkToMeSection;
