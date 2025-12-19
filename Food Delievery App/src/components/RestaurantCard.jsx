import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, resName, cuisine, ratings, time, link } = props;

  const name = resData ? resData.name : resName;
  const cuisines = resData ? resData.cuisines : [cuisine];
  const avgRating = resData ? resData.avgRating : ratings;
  const slaString = resData ? resData.sla.slaString : time;
  const priceforTwo = resData ? resData.costForTwo : "N/A";
  const imageSrc = resData
    ? `${CDN_URL}${resData.cloudinaryImageId}`
    : link;
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
        <div className="res-time">{slaString} ⏱️</div>
      </div>
    </div>
  );
};

export default RestaurantCard;