import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        style={{ width: "18rem", margin: "20px" }}
        onClick={() => this.setState({ selected: !this.state.selected })}
      >
        <Card.Img variant="top" src={this.props.books.img} />
        <Card.Body>
          <Card.Title>{this.props.books.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Button>Commenti</Button>
        {this.state.selected && (
          <CommentArea
            key={this.props.books.asin}
            asin={this.props.books.asin}
          />
        )}
      </Card>
    );
  }
}

export default SingleBook;
