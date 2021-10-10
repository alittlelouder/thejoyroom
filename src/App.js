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

const contentURL = 'https://graphql.contentful.com/content/v1/spaces/wr6ttoy5edxe/environments/master?access_token=Z2xqNSZWD1jhGfh7RtaxqdMyX4iOYT4NQ_2-g9EiVHI&query=query($preview:%20Boolean,%20$limit:%20Int,%20$contentDatesId:%20String!)%20{%20contentDates(preview:%20$preview,%20id:%20$contentDatesId)%20{%20affirmation%20{%20json%20}%20sectionsCollection%20{%20items%20{%20title%20description%20link%20linkText%20image%20{%20url%20width%20height%20}%20sectionName%20resourcesCollection(limit:%20$limit)%20{%20items%20{%20eyebrow%20title%20description%20externalLink%20externalLinkText%20image%20{%20url%20width%20height%20}%20}%20}%20}%20}%20}%20}%20&variables={%20%22contentDatesId%22:%20%222C9D1e8DdPI0vGT4XXR4OU%22,%20%22preview%22:%20null,%20%22limit%22:%206%20}';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      colors: [
        "#C96112",
        "#EC9D5E",
        "#40381A",
      ],
      affirmation: '',
      content: []
  };

  fetch(contentURL)
    .then(response => response.json())
    .then(data => {
      console.log(data.data.contentDates);
      this.setState((prevState) => {
        prevState.affirmation = data.data.contentDates.affirmation.json.content[0].content[0].value;
        prevState.content = data.data.contentDates.sectionsCollection.items;
        return prevState;
      });
    });
  }

  render() {
      return (
        <React.StrictMode>
        <Header />
        <Greeting />
        <Affirmation text={this.state.affirmation}/>
        <CardContainer>
        {this.state.content.map((card, i) =>
    
          <ContentCard
            eyebrow={card.sectionName}
            backgroundColor={this.state.colors[i]}
            image={card.image.url}
            title={card.title}
            description={card.description}
          />
        )}
        </CardContainer>
        <Footer />
      </React.StrictMode>
      );
  }
}

export { App }; 