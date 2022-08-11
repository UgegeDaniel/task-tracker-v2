import React from 'react';
import ReactDOM from 'react-dom';
import {AppProvider} from './context';
import { ThemeProvider } from 'styled-components'
import App from './App';

const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
