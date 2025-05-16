import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import CommentsList from "./CommentsList";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            onClick={() => this.setState({ selected: !this.state.selected })}
            variant="top"
            src={this.props.books.img}
          />
          <Card.Body>
            <Card.Title>{this.props.books.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              compra ora €{this.props.books.price}
            </Button>
          </Card.Body>
          {this.state.selected && <CommentArea asin={this.props.books.asin} />}
        </Card>
      </>
    );
  }
}

export default SingleBook;
