import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = (props) => {
  console.log(props);

  return (
    <div className="res-card">
      <img className="res-logo" src={props.link} alt="restaurant-logo" />
      <div className="card-content">
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.ratings}</h4>
      <h4>{props.time}</h4>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="McDonalds"
          cuisine="Burgers, Beverages"
          ratings="4.6"
          time="15-20 Mins"
          link="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png"
        />
        <RestaurantCard
          resName="Dominos"
          cuisine="Pizza"
          ratings="4.7"
          time="25-30 Mins"
          link="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/960px-Dominos_pizza_logo.svg.png"
        />
        <RestaurantCard
          resName="Chitale Bandhu"
          cuisine="Bakarwadi"
          ratings="5.0"
          time="10-15 Mins"
          link="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chitale_Bandhu_Mithaiwale_logo.svg/1200px-Chitale_Bandhu_Mithaiwale_logo.svg.png"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
