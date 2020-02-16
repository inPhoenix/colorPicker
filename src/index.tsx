import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

import App from './components/App';
import { CounterProvider } from './Context/Context';

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);
