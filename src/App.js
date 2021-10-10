import React from 'react';
import "./index.css";
import "./index.scss";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Affirmation from "./components/DailyAffirmation/DailyAffirmation.js";
import CardContainer from "./components/CardContainer/CardContainer";
import ContentCard from "./components/ContentCard/ContentCard";
import Footer from "./components/Footer/Footer";
import reportWebVitals from "./reportWebVitals";
import Customizer from './components/Customizer/Customizer';

//temp data images
import Celeste from './assets/images/celeste.png';
import Burst from './assets/images/burst.png';
import Badge from './assets/images/badge.png';
import Leaves from './assets/images/leaves.png';
import Door from './assets/images/door.png';

const contentURL = 'https://graphql.contentful.com/content/v1/spaces/wr6ttoy5edxe/environments/master?access_token=Z2xqNSZWD1jhGfh7RtaxqdMyX4iOYT4NQ_2-g9EiVHI&query=query($preview:%20Boolean,%20$limit:%20Int,%20$contentDatesId:%20String!)%20{%20contentDates(preview:%20$preview,%20id:%20$contentDatesId)%20{%20affirmation%20{%20json%20}%20sectionsCollection%20{%20items%20{%20title%20description%20link%20linkText%20image%20{%20url%20width%20height%20}%20sectionName%20resourcesCollection(limit:%20$limit)%20{%20items%20{%20eyebrow%20title%20description%20externalLink%20externalLinkText%20image%20{%20url%20width%20height%20}%20}%20}%20}%20}%20}%20}%20&variables={%20%22contentDatesId%22:%20%222C9D1e8DdPI0vGT4XXR4OU%22,%20%22preview%22:%20null,%20%22limit%22:%206%20}';
//temp data
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleCustomizeClick = this.handleCustomizeClick.bind(this);
    this.handleGreetingChange = this.handleGreetingChange.bind(this);

    this.colors = {
      'offBlack': '#40381A',
      'offWhite': '#FAF8F1',
      'lilac': '#E7C8D8',
      'red': '#C96112',
      'peach': '#EC9D5E',
      'blue': '#A2CEBF',
      'mustard': '#D4A617'
    }

    const localState = JSON.parse(localStorage.getItem('state'));
    if (!localState) {
      this.state = {
        affirmation: '',
        greeting: 'Welcome,',
        content: []
      };
    } else {
      this.state = localState;
    }



    fetch(contentURL)
      .then(response => response.json())
      .then(data => {
        this.setState((prevState) => {
          prevState.affirmation = data.data.contentDates.affirmation.json.content[0].content[0].value;
          prevState.content = data.data.contentDates.sectionsCollection.items;
          localStorage.setItem('state', JSON.stringify(prevState));
          return prevState;
        });
      });
  }

  handleCustomizeClick() {
    this.setState({isCustomizing: !this.state.isCustomizing});
  }

  handleGreetingChange(e) {
    this.setState(prevState => {
      prevState.greeting= e.target.value;
      prevState.isCustomizing = false;
      localStorage.setItem('state', JSON.stringify(prevState));
      prevState.isCustomizing = true;
      return prevState;
    });
  }

  render() {
    let body;
    if (this.state.isCustomizing) {
      body = <Customizer greeting={this.state.greeting} handleGreetingChange={this.handleGreetingChange} colors={this.colors}/>
    } else {
      body = (<div>
        <Greeting greeting={this.state.greeting} />
        <Affirmation text={this.state.affirmation} />

        <CardContainer>
          {this.state.content.map((card, i) =>

            <ContentCard
              eyebrow={card.sectionName}
              backgroundColor={this.colors[['red', 'peach', 'offBlack'][i]]}
              image={card.image.url}
              title={card.title}
              description={card.description}
            />
          )}
        </CardContainer>
        </div>)
    }
    return (
      <React.StrictMode>
        <Header isCustomizing={this.state.isCustomizing} handleCustomizeClick={this.handleCustomizeClick}/>
        {body}
        <Footer />
      </React.StrictMode>
    );
  }
}

export { App };