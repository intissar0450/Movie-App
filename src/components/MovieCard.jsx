import React from "react";
import { Button, Card } from "react-bootstrap";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const MovieCard = ({ el, handleDelete }) => {
  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={el.image} style={{ height: "400px" }} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>Release date : {el.date}</Card.Text>
        <Card.Text>Description : {el.description}</Card.Text>
        <Card.Text>
          <StarRating rating={el.rating} />
        </Card.Text>
        <Button variant="danger" onClick={() => handleDelete(el.id)}>
          Delete
        </Button>
        <Link to={`/movies/${el.id}`}>
          <Button variant="primary">Check Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
