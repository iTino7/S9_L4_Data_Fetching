import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  fetchCommentArea = async (id) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDczMTI2MzYsImV4cCI6MTc0ODUyMjIzNn0.HA1gL9IkICqTPlG_ScCAT6W2v5UjEQlRnu2l19nhGjs",
          },
        }
      );

      if (resp.ok) {
        const comment = await resp.json();
        this.setState({ comment });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  componentDidMount() {
    this.fetchCommentArea(this.props.asin);
  }

  render() {
    return (
      <ListGroup>
        {this.state.comment.map((item) => (
          <ListGroup.Item key={item._id}>{item.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentArea;
