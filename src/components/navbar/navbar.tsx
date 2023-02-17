import { navigationItems } from '@/constants';
import { useStylesNavItem } from '@/styles';
import { MenuMobil, ThemeModeIcon } from '@/sub-components';
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
        paddingLeft: '2rem',
        paddingRight: {
          xs: '2rem',
          sm: '2rem',
          md: 0,
          lg: 0,
        },
        height: '5rem',
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          width: '20rem',
          bgcolor: 'primary.main',
          flex: 1,
          height: 'auto',
          color: 'secondary.contrastText',
          alignItems: 'center',
          alignContents: 'center',
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
          },
        }}
        value={value}
        onChange={handleChange}
      >
        {navigationItems.map((item, index) => (
          <BottomNavigationAction
            label={<Box sx={{ fontSize: '1.1rem' }}>{item.name}</Box>}
            LinkComponent="a"
            href={`#${item.slug}`}
            key={index}
            sx={{
              fontWeight: 'bold',
              textTransform: 'capitalize',
              borderRadius: '2rem',
              paddingY: '.5rem',
            }}
            classes={{ root: classes.root }}
          />
        ))}
      </BottomNavigation>
      <MenuMobil />
      <ThemeModeIcon />
    </Box>
  );
};

export default Navbar;
