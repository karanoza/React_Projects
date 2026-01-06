import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";
import { useState } from "react";

const Body = () => {
  //local state variable for restaurants
  const [restaurants, setRestaurants] = useState(resList);
 
  //Normal JS variable
  let listOfRestaurants = [];


  return (
    <div className="body">
      <div className="filter-section">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter((res) => res.info.avgRating > 4.4);
            setRestaurants(filteredList);
            console.log("Filtered List:", filteredList);
          }}
        >
          Top Rated
        </button>
        <button className="filter-btn"
         onClick={() => {
            const sortedList = [...restaurants].sort((a, b) => {
              const costA = parseInt(a.info.costForTwo.replace('₹', '').split(' ')[0]);
              const costB = parseInt(b.info.costForTwo.replace('₹', '').split(' ')[0]);
              return costA - costB;
            });
            setRestaurants(sortedList);
            console.log("Sorted List:", sortedList);
           
          }}
          >Cost: Low to High</button>
        <button className="filter-btn">Cost: High to Low</button>
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