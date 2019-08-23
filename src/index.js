import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';
import * as serviceWorker from './serviceWorker';

const lang = window.location.pathname === '/ru' ? 'ru' : 'en';
if (lang === 'ru') document.title = 'Дурак';

ReactDOM.render(
  <App lang={lang} />,
  document.getElementById('root')
);

serviceWorker.unregister();
