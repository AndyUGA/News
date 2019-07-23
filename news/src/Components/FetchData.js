import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Button";

export class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <ul>
          {items.articles.map(item => (
            <p key={item.id}>
              {item.title}

              <a href={item.url} target="_blank">
                <img class="testImage" src={item.urlToImage} />
              </a>
            </p>
          ))}
          ;
        </ul>
      );
    }
  }
}
