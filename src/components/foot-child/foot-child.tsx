import { Box, Stack, Typography } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';

const FootChild = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="center"
      height={'5rem'}
      alignItems="center"
    >
      <CoffeeIcon sx={{ color: '#9A6B40' }} />
      <Typography variant="body2" sx={{ color: 'secondary.contrastText' }}>
        Buy me a coffee
      </Typography>
    </Stack>
  );
};

export default FootChild;
