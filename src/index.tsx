import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './components/App';
import { ColorProvider } from './Context/ColorContext';
import { ThemeProvider } from './Context/ThemeContext';

ReactDOM.render(
  <ColorProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ColorProvider>,
  document.getElementById('root')
);
