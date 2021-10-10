import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Affirmation from "./components/DailyAffirmation/DailyAffirmation.js";
import CardContainer from "./components/CardContainer/CardContainer";
import ContentCard from "./components/ContentCard/ContentCard";
import Footer from "./components/Footer/Footer";
import reportWebVitals from "./reportWebVitals";

//temp data images
import Celeste from './assets/images/celeste.png';
import Burst from './assets/images/burst.png';
import Badge from './assets/images/badge.png';
import Leaves from './assets/images/leaves.png';
import Door from './assets/images/door.png';


const data = [
  {
    eyebrow: "OCTOBER WoC SPOTLIGHT",
    backgroundColor: "#C96112",
    image: Celeste,
    title: "Celeste Ng",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
    secondaryContent: [
      {
        image: Celeste,
        eyebrow:'Celeste Ng',
    title: "Lorem ipsum dolor sit amet pagar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
      link: 'Read more',
      linkUrl: ''
      },
      {
        image: Burst,
        eyebrow:'Celeste Ng',
    title: "Self Care Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
      },
      {
        image: Burst,
        eyebrow:'Celeste Ng',
    title: "Self Care Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
      }
    ]
    
  },
  {
    eyebrow: "FEATURED GUIDE",
    backgroundColor: "#EC9D5E",
    image: Burst,
    title: "Self Care Guide",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
      link: 'View all guides',
      linkUrl: ''
  },
  {
    eyebrow: "WEEKLY ROUND-UP",
    backgroundColor: "#40381A",
    image: Badge,
    title: "What to Read, Watch and Listen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
      link: 'Read more',
      linkUrl: '',
      secondaryContent: [
        {
          image: Badge,
          eyebrow:'Read',
      title: "Lorem ipsum dolor sit amet pagar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
        link: 'Read more',
        linkUrl: ''
        },
        {
          image: Door,
          eyebrow:'Listen',
      title: "Lorem ipsum dolor sit amet pagar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
        link: 'Read more',
        linkUrl: ''
        },
        {
          image: Leaves,
          eyebrow:'WATCH',
      title: "Lorem ipsum dolor sit amet pagar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. ",
        link: 'Read more',
        linkUrl: ''
        }
      ]
  },
];
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Greeting />
    <Affirmation />
    <CardContainer>
    {data.map(card =>

      <ContentCard
        eyebrow={card.eyebrow}
        backgroundColor={card.backgroundColor}
        image={card.image}
        title={card.title}
        description={card.description}
        link={card.link}
        url={card.linkUrl}
        secondaryContent={card.secondaryContent}
      />
    )}
    </CardContainer>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
