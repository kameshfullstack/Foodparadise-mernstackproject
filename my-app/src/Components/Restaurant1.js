import React from "react";

function Restaurant1(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4">
          <img
            src={props.image}
            className="card-img-top"
            alt="Restaurant"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text">Location: {props.location}</p>
            <p className="card-text">Cuisine: {props.cuisine}</p>
            <p className="card-text">
              Rating: {props.rating} <span>({props.ratingCount} reviews)</span>
            </p>
            <button className="btn btn-success me-3">Order Now</button>
            <button className="btn btn-outline-primary">Add to Favorites</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant1;
