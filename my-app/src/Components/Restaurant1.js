import React from "react";
import { Button } from 'react-bootstrap';

function Restaurant1(props) {
  const {
    name,
    location,
    cuisine,
    rating,
    image,
   
  } = props;
 
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4">
          <img
            src={image}
            className="card-img-top"
            alt="Restaurant"
            style={{ height: "260px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Location: {location}</p>
            <p className="card-text">Cuisine: {cuisine}</p>
            <p className="card-text">
              Rating: {rating} 
            </p>
            <Button
              variant="success"
              className="me-3"
            >
              Order Now
            </Button>
            <Button className="btn btn -primary">Add to Favorites</Button>
          </div>
        </div>
      </div>
    </>
  );
  };


export default Restaurant1;
