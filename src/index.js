import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Affirmation from './components/DailyAffirmation/DailyAffirmation.js';
import ContentCard from './components/ContentCard/ContentCard';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const TestCard = {
  eyebrow: 'OCTOBER WoC SPOTLIGHT',
  backgroundColor: 'orange',
  image: './assets/images/celeste.png',
  title: 'Celeste Ng',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. '
}

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Greeting/>
    <Affirmation/>
    <ContentCard eyebrow={TestCard.eyebrow} backgroundColor={TestCard.backgroundColor} image={TestCard.image} title={TestCard.title} description={TestCard.description}/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

