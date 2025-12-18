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

const resObj = {
"info": {
"id": "23716",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/eff49cf3-d043-4703-a2de-6f84600c6501_23716.JPG",
"locality": "Marunji Road",
"areaName": "Hinjawadi",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "46K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 0.4,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "0.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-17 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-902d3bdf-9475-4b56-9722-30c2a086a988"
},
"cta": {
"link": "https://www.swiggy.com/city/pune/mcdonalds-marunji-road-hinjawadi-rest23716",
"type": "WEBLINK"
}
};


const RestaurantCard = (props) => {
  const { resData, resName, cuisine, ratings, time, link } = props;

  const name = resData ? resData.name : resName;
  const cuisines = resData ? resData.cuisines : [cuisine];
  const avgRating = resData ? resData.avgRating : ratings;
  const slaString = resData ? resData.sla.slaString : time;
  const priceforTwo = resData ? resData.costForTwo : "N/A";
  const imageSrc = resData ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}` : link;

  return (
    <div className="res-card">
      <img className="res-logo" src={imageSrc} alt="restaurant-logo" />
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{priceforTwo}</h4>
        <h4>{slaString}</h4>
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
          resData={resObj.info}
        />
        {/* <RestaurantCard
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
        /> */}
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
