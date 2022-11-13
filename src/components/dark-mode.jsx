import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Component } from 'react';
import theme from '../styles/theme';
import React from 'react';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>This app is using the dark mode</main>
            </ThemeProvider>
        );
    }
}

export default App;
