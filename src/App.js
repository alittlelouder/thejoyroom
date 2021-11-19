import React from 'react';
import "./index.css";
import "./index.scss";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Affirmation from "./components/DailyAffirmation/DailyAffirmation.js";
import CardContainer from "./components/CardContainer/CardContainer";
import ContentCard from "./components/ContentCard/ContentCard";
import Customizer from './components/Customizer/Customizer';
import Footer from './components/Footer/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(window.location.search)
    let isPreview = params.get('preview') ? true : false;
    let previewToken = 'Qg5GbDwKrU8Dz-eys6IP_dXhxIIt9an_6CPfzRWIcrI';
    let liveToken = 'Z2xqNSZWD1jhGfh7RtaxqdMyX4iOYT4NQ_2-g9EiVHI';

    this.handleCustomizeClick = this.handleCustomizeClick.bind(this);
    this.handleGreetingChange = this.handleGreetingChange.bind(this);
    this.handleColorPaletteChange = this.handleColorPaletteChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);

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
        affirmationOpacity: 1,
        greeting: 'Welcome,',
        content: [],
        palette: 'light',
        background: 'theme-flower',
        chromeLink: ''
      };
    } else {
      localState.affirmationOpacity = 1;
      this.state = localState;
    }
    this.setState((prevState) => {
      prevState.affirmationOpacity = 1;
      return prevState;
    });
    console.log(this.state);

    this.handleColorPaletteChange(this.state.palette);
    this.handleBackgroundChange(this.state.background);

    // setInterval(() => {
        
    // }, 100);

    window.addEventListener("scroll", () => {
      this.updateAffirmationOpacity();
    });

    if (params.get('preview')) {
      this.getContent(isPreview, params.get('preview'), previewToken)
    } else {
      fetch(`https://cdn.contentful.com/spaces/wr6ttoy5edxe/environments/master/entries?access_token=${liveToken}&content_type=contentDates&limit=1`)
        .then(response => response.json())
        .then(json => {
          this.getContent(isPreview, json.items[0].sys.id, liveToken)
        })
      fetch(`https://graphql.contentful.com/content/v1/spaces/wr6ttoy5edxe/environments/master?access_token=${liveToken}&query=query{extensionDetails(id:"350cSYMKapJ3KQN3okMse6"){chromeLink}}`)
        .then(response => response.json())
        .then(json => {
          this.setState((prevState) => {
            prevState.chromeLink = json.data.extensionDetails.chromeLink
            return prevState;
          });
          console.log()
          // this.getContent(isPreview, json.items[0].sys.id, liveToken)
        })
    }
  }

  getContent(preview, id, token) {
    const contentURL = `https://graphql.contentful.com/content/v1/spaces/wr6ttoy5edxe/environments/master?access_token=${token}&query=query($preview:%20Boolean,%20$limit:%20Int,%20$contentDatesId:%20String!)%20{%20contentDates(preview:%20$preview,%20id:%20$contentDatesId)%20{%20affirmation%20{%20json%20}%20sectionsCollection%20{%20items%20{%20title%20description%20link%20linkText%20image%20{%20url%20width%20height%20}%20sectionName%20resourcesCollection(limit:%20$limit)%20{%20items%20{%20eyebrow%20title%20description%20externalLink%20externalLinkText%20image%20{%20url%20width%20height%20}%20}%20}%20}%20}%20}%20}%20&variables={%20%22contentDatesId%22:%20%22${id}%22,%20%22preview%22:%20${preview},%20%22limit%22:%206%20}`;
    fetch(contentURL)
      .then(response => response.json())
      .then(data => {
        this.setState((prevState) => {
          prevState.affirmation = data.data.contentDates.affirmation.json.content[0].content[0].value;
          prevState.content = data.data.contentDates.sectionsCollection.items;
          localStorage.setItem('state', JSON.stringify(prevState));
          return prevState;
        });
      })
    fetch(contentURL)
      .then(response => response.json())
      .then(data => {
        this.setState((prevState) => {
          prevState.affirmation = data.data.contentDates.affirmation.json.content[0].content[0].value;
          prevState.content = data.data.contentDates.sectionsCollection.items;
          localStorage.setItem('state', JSON.stringify(prevState));
          return prevState;
        });
      })
  }

  saveStateWithoutCustomization(param, val) {
    this.setState(prevState => {
      prevState[param]= val;
      prevState.isCustomizing = false;
      localStorage.setItem('state', JSON.stringify(prevState));
      prevState.isCustomizing = true;
      return prevState;
    });
  }

  handleCustomizeClick() {
    this.setState({isCustomizing: !this.state.isCustomizing});
  }

  handleGreetingChange(e) {
    this.saveStateWithoutCustomization('greeting', e.target.value)
  }

  handleColorPaletteChange(val) {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(val);
    this.saveStateWithoutCustomization('palette', val);
  }

  handleBackgroundChange(val) {
    document.body.classList.remove('theme-sun', 'theme-flower');
    document.body.classList.add(val);
    this.saveStateWithoutCustomization('background', val);
  }

  updateAffirmationOpacity() {
    console.log()
    const currentScroll = window.pageYOffset;
      let opacity = (290 - window.pageYOffset) / 290;
      if (opacity != this.state.affirmationOpacity) {
        this.setState((prevState) => {
          prevState.affirmationOpacity = opacity;
          return prevState;
        });
      }
  }

  render() {
    let content;
    if (this.state.isCustomizing) {
      content = <Customizer
                  greeting={this.state.greeting}
                  handleColorPaletteChange={this.handleColorPaletteChange}
                  handleBackgroundChange={this.handleBackgroundChange}
                  handleGreetingChange={this.handleGreetingChange}
                  colors={this.colors}/>
    } else {
      content = (<div className="main-content">
        <Greeting greeting={this.state.greeting} />
        <Affirmation text={this.state.affirmation} opacity={1}/>

        <CardContainer>
          {this.state.content.map((card, i) =>

            <ContentCard
              id={i}
              eyebrow={card.sectionName}
              backgroundColor={this.colors[['red', 'peach', 'offBlack'][i]]}
              image={card.image.url}
              title={card.title}
              description={card.description}
              link={card.link}
              linkText={card.linkText}
              secondaryContent={card.resourcesCollection.items}
            />
          )}
        </CardContainer>
        </div>)
    }
    return (
      <React.StrictMode>
        <Header isCustomizing={this.state.isCustomizing} handleCustomizeClick={this.handleCustomizeClick}/>
        {content}
        <Footer chromeLink={this.state.chromeLink}/>
      </React.StrictMode>
    );
  }
}

export { App };