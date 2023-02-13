import { Props } from '@/types';
import { Box } from '@mui/material';
import * as React from 'react';
import { FootChild } from '../foot-child';
import { Navbar } from '../navbar';

const LayoutChild: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '50%',
        flex: 1,
        minHeight: '100vh',
        bgcolor: 'primary.main',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Box>{children}</Box>
      <FootChild />
    </Box>
  );
};

export default LayoutChild;
