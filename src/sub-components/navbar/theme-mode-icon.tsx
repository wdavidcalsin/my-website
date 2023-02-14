import { useColorMode } from '@/context';
import { Box, IconButton, Fade, Zoom } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const iconStyle = {
  color: 'secondary.contrastText',
  fontSize: '2rem',
};

const ThemeModeIcon = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        aria-label="mode"
        component="label"
        onClick={toggleColorMode}
        sx={{
          height: 'auto',
          borderRadius: '100%',
        }}
      >
        {mode === 'light' ? (
          <Fade in={mode === 'light'}>
            <DarkModeIcon sx={iconStyle} />
          </Fade>
        ) : (
          <Zoom in={mode === 'dark'}>
            <LightModeIcon sx={iconStyle} />
          </Zoom>
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeModeIcon;