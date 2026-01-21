import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  //local state variable for restaurants
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch restaurant data
    fetchRestaurants();
    console.log("Component mounted, fetched restaurant data.");
  }, []);

  const fetchRestaurants = async () => {
    try {
      // Fetching data from the Swiggy API
      const response = await fetch("http://localhost:5001/api/swiggy");
      const data = await response.json();

      console.log("Full API response:", data);

      // “Instead of relying on hardcoded indexes, 
      // I dynamically locate the restaurant card by checking for the presence of 
      // the restaurants property. This makes the code resilient to API structure 
      // changes and avoids breaking when cards are reordered or new sections are introduced.”

      const restaurantCard = data?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurantsData =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      console.log("Extracted Restaurants Data:", restaurantsData);
      setRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setRestaurants([]);
    }
  };

  return (
    <div className="body">
      <div className="filter-section">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setRestaurants(filteredList);
            console.log("Filtered List:", filteredList);
          }}
          // Filtering restaurants with rating greater than 4.3
        >
          Top Rated
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const sortedList = [...restaurants].sort((a, b) => {
              const costA = parseInt(
                a.info.costForTwo.replace("₹", "").split(" ")[0]
              );
              const costB = parseInt(
                b.info.costForTwo.replace("₹", "").split(" ")[0]
              );
              return costA - costB;
            });
            // Update the state with the sorted list
            setRestaurants(sortedList);
            console.log("Sorted List:", sortedList);
          }}
        >
          Cost: Low to High
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const sortedList = [...restaurants].sort((a, b) => {
              const costA = parseInt(
                a.info.costForTwo.replace("₹", "").split(" ")[0]
              );
              const costB = parseInt(
                b.info.costForTwo.replace("₹", "").split(" ")[0]
              );
              return costB - costA;
            });
            // Update the state with the sorted list
            setRestaurants(sortedList);
            console.log("Sorted List:", sortedList);
          }}
        >
          Cost: High to Low
        </button>
        <button className="filter-btn">Delivery Time</button>
        <button className="filter-btn">Cuisines</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
