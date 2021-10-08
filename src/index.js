import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/scss/_vars.scss';
import './assets/scss/_grid.scss';
import './assets/scss/_mixins.scss';
import Affirmation from './components/DailyAffirmation/DailyAffirmation.js';
import Header from './components/Header/Header';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Affirmation/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
