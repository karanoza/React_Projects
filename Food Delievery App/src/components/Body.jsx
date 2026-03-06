import RestaurantCard, {withPureVegBadge} from "./RestaurantCard";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const navigate = useNavigate();
  //local state variable for restaurants
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const PureVegRestaurantCard = withPureVegBadge(RestaurantCard);
  //Whenever state variables update, the component re-renders

//Custom hook to check online status.
  const onlineStatus = useOnlineStatus();
  
  if (!onlineStatus) {  
    return (
      <div className="offline-container">
        <div className="offline-content">
          <div className="offline-emoji">📡</div>
          <h1>You are offline</h1>
          <p>Please check your internet connection.</p>
        </div>
      </div>
    );
  }

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
      setAllRestaurants(restaurantsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setRestaurants([]);
      setLoading(false);
    }
  };

  // Conditional rendering based on loading state and restaurant data
  // If you want to show spinner just replace Shimmer with Spinner
  if (loading) {
    return <Shimmer />;
  }

  
  
  // If no restaurants found after loading
  return restaurants.length === 0 ? (
    <div className="no-restaurants-container">
      <div className="no-restaurants-content">
        <div className="no-restaurants-emoji">🍽️</div>
        <h1>No Restaurants Found</h1>
        <p>Sorry, we couldn't find any restaurants matching your search.</p>
        <button
          className="no-restaurants-btn"
          onClick={() => {
            setSearchQuery("");
            setRestaurants(allRestaurants);
          }}
        >
          🔄 View All Restaurants
        </button>
      </div>
    </div>
  ) : (
    // Main body content when restaurants are available
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search restaurants..."
          value={searchQuery}
          onChange={(e) => {
            const query = e.target.value;
            setSearchQuery(query);
            if (query === "") {
              setRestaurants(allRestaurants);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchQuery.trim() === "") {
              setRestaurants(allRestaurants);
            } else {
              const filteredRestaurants = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setRestaurants(filteredRestaurants);
            }
          }}
        >
          🔍 Search
        </button>
      </div>
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
          <div
            key={restaurant.info.id}
            onClick={() => navigate(`/restaurant/${restaurant.info.id}`)}
            style={{ cursor: "pointer" }}
          >
            {/* If the restaurant has pure veg options add pure veg badge */}
            {console.log("Restaurant Pure Veg Status:", restaurant.info.veg)}
            {restaurant.info.veg ? (
              <PureVegRestaurantCard resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
