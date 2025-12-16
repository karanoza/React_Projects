import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
       <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" alt="logo" />
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
  )
}

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png" alt="restaurant-logo" />
      <h3>McDonald's</h3>
      <h4>Burgers, Beverages, Fast food</h4>
      <h4>4.6 Stars</h4>
      <h4>15-20 Mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
     <div className="search">Search</div>
      <div className="res-container">
          <RestaurantCard />
           <RestaurantCard />
            <RestaurantCard />
            
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
