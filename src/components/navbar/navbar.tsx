import { navigationItems } from '@/constants';
import { useStylesNavItem } from '@/styles';
import { ThemeModeIcon } from '@/sub-components';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import * as React from 'react';

const Navbar = () => {
  const [value, setValue] = React.useState('recents');

  const classes = useStylesNavItem();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        bgcolor: 'primary.main',
        paddingX: '2rem',
        height: '5rem',
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          width: '20rem',
          bgcolor: 'primary.main',
          color: 'secondary.contrastText',
        }}
        value={value}
        onChange={handleChange}
      >
        {navigationItems.map((item, index) => (
          <BottomNavigationAction
            label={<Box sx={{ fontSize: '.99rem' }}>{item.name}</Box>}
            key={index}
            sx={{
              fontWeight: 'bold',
              textTransform: 'capitalize',
              borderRadius: '2rem',
            }}
            classes={{ root: classes.root }}
          />
        ))}
      </BottomNavigation>
      <ThemeModeIcon />
    </Box>
  );
};

export default Navbar;
