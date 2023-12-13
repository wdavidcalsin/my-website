import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { fontFamily } from './font';

export const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: fontFamily,
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
        },
    },
});

export default theme;
