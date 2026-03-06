import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, resName, cuisine, ratings, time, link } = props;

  const name = resData ? resData.name : resName;
  const cuisines = resData ? resData.cuisines : [cuisine];
  const avgRating = resData ? resData.avgRating : ratings;
  const slaString = resData ? resData.sla.slaString : time;
  const priceforTwo = resData ? resData.costForTwo : "N/A";
  const imageSrc = resData ? `${CDN_URL}${resData.cloudinaryImageId}` : link;
  const discount = resData ? resData.aggregatedDiscountInfoV3 : null;

  return (
    <div className="res-card">
      <div className="image-container">
        <img className="res-logo" src={imageSrc} alt="restaurant-logo" />
        {discount && (
          <div className="discount-badge">
            <div className="discount-header">{discount.header}</div>
            <div className="discount-subheader">{discount.subHeader}</div>
          </div>
        )}
      </div>
      <div className="card-content">
        <div className="res-name">{name}</div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div className="res-rating">⭐ {avgRating}</div>
        <div className="res-price">{priceforTwo}</div>
        <div
          className="res-time"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <span>{slaString} ⏱️</span>
          {props.renderAfterTime && props.renderAfterTime()}
        </div>
      </div>
    </div>
  );
};

// Higher order component to add pure veg badge

const withPureVegBadge = (RestaurantCard) => {
  return (props) => {
    // Only show badge if veg=true (from resData or props)
    const isVeg = props.resData ? props.resData.veg : props.veg;

    // If the restaurant is not veg, it simply renders the original RestaurantCard with all the received props, without any badge.
   
    if (!isVeg) return <RestaurantCard {...props} />;

    // If the restaurant is veg, it wraps the card in a div with the class pure-veg-card (for possible styling).
    // It then renders the RestaurantCard, passing all the received props, and also provides a renderAfterTime function.
    // This function returns a span element that contains a green dot and the text "Pure Veg", which will be displayed inline after the delivery time on the card.
    // Inject badge after slaString
    
    return (
      <div className="pure-veg-card">
        <RestaurantCard
          {...props}
          renderAfterTime={() => (
            <span className="pure-veg-badge-inline">
              <span className="pure-veg-dot" aria-label="Pure Veg"></span>
              <span className="pure-veg-badge">Pure Veg</span>
            </span>
          )}
        />
      </div>
    );
  };
};

export default RestaurantCard;
export { withPureVegBadge };
