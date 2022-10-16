import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
  <ThemeProvider theme={theme}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  </ThemeProvider>, document.getElementById('root')
);


reportWebVitals();
serviceWorker.unregister();
