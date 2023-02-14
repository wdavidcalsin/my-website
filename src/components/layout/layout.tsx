import { Box } from '@mui/material';
import { Aside } from '../aside';
import { HomeContent } from '../home-content';
import { LayoutChild } from '../layout-child';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
        },
        justifyContent: {
          xs: 'normal',
          sm: 'normal',
          md: 'end',
          lg: 'end',
        },
      }}
    >
      <LayoutChild>
        <HomeContent />
      </LayoutChild>
      <Aside />
    </Box>
  );
};

export default Layout;
