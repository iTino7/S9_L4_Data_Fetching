import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  fetchCommentArea = async () => {
    console.log("asin", this.props.asin);
    
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
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
    this.fetchCommentArea();
  }

  render() {
    console.log("asin", this.props.asin);

    return (
      <ListGroup>
        <h4 className="mt-4">CommentArea</h4>
        <CommentsList comments={this.state.comment} />
        <h4 className="mt-4">Aggiungi commento</h4>
        <AddComment asin={this.props.asin} />
      </ListGroup>
    );
  }
}

export default CommentArea;
