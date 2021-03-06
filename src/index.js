import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';

const theme = {
    fg: 'white',
    bg: 'purple,'
}

ReactDOM.render(
<ThemeProvider theme={theme} >
<App />
</ThemeProvider>, 
document.getElementById('root'));
