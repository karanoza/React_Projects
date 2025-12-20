import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";

const Body = () => {
  return (
    <div className="body">
      <div className="filter-section">
        <button className="filter-btn">Top Rated</button>
        <button className="filter-btn">Cost: Low to High</button>
        <button className="filter-btn">Cost: High to Low</button>
        <button className="filter-btn">Delivery Time</button>
        <button className="filter-btn">Cuisines</button>
      </div>
      <div className="res-container">

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;