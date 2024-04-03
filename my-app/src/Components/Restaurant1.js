import React from "react";
import { Button } from 'react-bootstrap';

function Restaurant1(props) {
  const {
    id,
    name,
    location,
    cuisine,
    rating,
    ratingCount,
    image,
   
  } = props;

  const handleOrderClick = async () => {
    const response = await fetch("/api/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurantId: id,
        restaurantName: name,
        restaurantLocation: location,
        restaurantCuisine: cuisine,
        restaurantRating: rating,
        restaurantImage: image,
      }),
    });

    if (response.ok) {
      console.log("Order placed successfully!");
      // Show a success message or redirect the user
    } else {
      console.error("Error placing order:", response.statusText);
      // Show an error message
    }
  };

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
              Rating: {rating} <span>({ratingCount} reviews)</span>
            </p>
            <Button
              variant="success"
              className="me-3"
              onClick={handleOrderClick}
            >
              Order Now
            </Button>
            <Button className="btn btn -primary">Add to Favorites</Button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Restaurant1;
