import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#753737',
        },
        background: {
            default: '  #25291C',
            paper: '#212121',
        },
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontFamily: 'Ubuntu Mono',
        },
        h2: {
            fontFamily: 'Ubuntu Mono',
        },
        h3: {
            fontFamily: 'Ubuntu Mono',
        },
        h4: {
            fontFamily: 'Ubuntu Mono',
        },
        h6: {
            fontFamily: 'Ubuntu Mono',
        },
        h5: {
            fontFamily: 'Ubuntu Mono',
        },
        subtitle1: {
            fontFamily: 'Ubuntu Mono',
        },
        subtitle2: {
            fontFamily: 'Ubuntu Mono',
        },
        button: {
            fontFamily: 'Ubuntu Mono',
            fontWeight: 900,
        },
        overline: {
            fontFamily: 'Ubuntu Mono',
        },
    },
});

export default theme;
