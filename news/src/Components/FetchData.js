import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
        <div>
          <Button variant="primary">Primary</Button>
          {items.articles.map(item => (
            <Card class="testCard">
              <Card.Img class="testImage" variant="top" src={item.urlToImage} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
          ;
        </div>
      );
    }
  }
}
