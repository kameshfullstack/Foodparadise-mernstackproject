import React, { useEffect, useState } from "react";
import Restaurant1 from "./Restaurant1";  
import { useNavigate } from "react-router-dom";

 

function RestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setRestaurants(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, [navigate]);
  // Display a loading message while fetching data
  if (restaurants.length === 0) {
    return (
      <>
        <h1>Loading... </h1>
      </>
    );
  }

  return (
    <>
      <section className="featured-restaurants">
        <h2>Featured Restaurants</h2>
        <div className="row">
          {restaurants.map((r) => (
            // Render Restaurant component for each restaurant
            <Restaurant1
              name={r.name}
              location={r.location}
              cuisine={r.cuisine}
              rating={r.rating}
              image={r.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default RestaurantPage;