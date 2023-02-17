import { navigationItems } from '@/constants';
import { useMenuDrawer } from '@/hooks';
import { HamburgerMenu } from '@/styles';
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

const MenuMobil = () => {
  const [isOpen, toggleDrawer, handleDrawerClose] = useMenuDrawer();

  const list = () => (
    <Box
      sx={{ width: 250, bgcolor: 'primary.main', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={handleDrawerClose}
    >
      <Typography
        sx={{
          textAlign: 'center',
          textTransform: 'uppercase',
          paddingY: '1.2rem',
          fontWeight: 'bold',
          fontSize: '1.3rem',
          color: 'secondary.contrastText',
        }}
      >
        menu
      </Typography>
      <Divider />
      <List>
        {navigationItems.map((item, index) => (
          <>
            <ListItem key={`${index * 100}`} disablePadding>
              <ListItemButton LinkComponent="a" href={`#${item.slug}`}>
                <ListItemIcon>
                  <item.icon sx={{ color: 'secondary.contrastText' }} />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    textTransform: 'capitalize',
                    color: 'secondary.contrastText',
                    '& span': {
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                    },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
        },
      }}
    >
      <Button
        onClick={toggleDrawer}
        sx={{
          color: 'secondary.contrastText',
          height: '2.6rem',
        }}
      >
        <HamburgerMenu clicked={isOpen}>&nbsp;</HamburgerMenu>
      </Button>
      <Drawer anchor={'left'} open={isOpen} onClose={handleDrawerClose}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default MenuMobil;
