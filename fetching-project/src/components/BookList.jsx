import React, { Component } from "react";
import { Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container>
        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          className="my-5"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <Row>
          {this.props.book
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .slice(0, 24)
            .map((item) => (
              <SingleBook key={item._id} books={item} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
