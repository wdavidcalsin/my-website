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
