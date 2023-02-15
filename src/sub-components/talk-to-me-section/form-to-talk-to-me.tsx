import { useStylesCustomInput } from '@/styles';
import { Button, FormControl, Stack, TextField } from '@mui/material';

const FormToTalkToMe = () => {
  const classes = useStylesCustomInput();

  return (
    <FormControl>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="What's your name?"
          variant="outlined"
          InputLabelProps={{
            classes: {
              focused: classes.label,
            },
          }}
          InputProps={{
            classes: {
              focused: classes.label,
              notchedOutline: classes.root,
            },
          }}
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="What's your @email"
          variant="outlined"
          InputLabelProps={{
            classes: {
              focused: classes.label,
            },
          }}
          InputProps={{
            classes: {
              focused: classes.label,
              notchedOutline: classes.root,
            },
          }}
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="What do you have to tell me/offer me"
          variant="outlined"
          InputLabelProps={{
            classes: {
              focused: classes.label,
            },
          }}
          InputProps={{
            classes: {
              focused: classes.label,
              notchedOutline: classes.root,
            },
          }}
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
            },
          }}
        />
        <Button
          sx={{
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            '&:hover': {
              bgcolor: 'secondary.main',
            },
          }}
        >
          Send it to me
        </Button>
      </Stack>
    </FormControl>
  );
};

export default FormToTalkToMe;
