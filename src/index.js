import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
// import './assets/scss/_vars.scss';
// import './assets/scss/_grid.scss';
// import './assets/scss/_mixins.scss';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Affirmation from './components/DailyAffirmation/DailyAffirmation.js';
import ContentCard from './components/ContentCard/ContentCard';



import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Greeting/>
    <Affirmation/>
    <ContentCard/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
