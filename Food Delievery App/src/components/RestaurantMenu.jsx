import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { menu, restaurantInfo, loading, error } = useRestaurantMenu(resId);

    // Handle loading and error states

    if (loading) {
        return (
            <div className="menu-loading">
                <div className="loading-spinner">🍽️</div>
                <h2>Loading delicious menu...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="menu-error">
                <h2>❌ Error: {error}</h2>
                <p>Make sure your backend server is running on port 5001</p>
                <button onClick={() => window.location.reload()}>🔄 Retry</button>
            </div>
        );
    }

    // Render restaurant info and menu items
    return (
        <div className="menu-page">
            {restaurantInfo && (
                <div className="restaurant-header-section">
                    <div className="restaurant-banner">
                        {restaurantInfo.cloudinaryImageId && (
                            <img 
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.cloudinaryImageId}`}
                                alt={restaurantInfo.name}
                                className="restaurant-banner-image"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        )}
                    </div>

                    <div className="restaurant-info-card">
                        <div className="restaurant-info-content">
                            <h1 className="restaurant-title">{restaurantInfo.name}</h1>
                            <p className="restaurant-cuisines">{restaurantInfo.cuisines?.join(" • ")}</p>

                            <div className="restaurant-metrics">
                                <div className="restaurant-metric">
                                    <span className="metric-icon">⭐</span>
                                    <div>
                                        <div className="metric-value">{restaurantInfo.avgRating}</div>
                                        <div className="metric-label">{restaurantInfo.totalRatingsString}</div>
                                    </div>
                                </div>

                                <div className="restaurant-metric">
                                    <span className="metric-icon">🕐</span>
                                    <div>
                                        <div className="metric-value">{restaurantInfo.sla?.slaString}</div>
                                        <div className="metric-label">Delivery Time</div>
                                    </div>
                                </div>

                                <div className="restaurant-metric">
                                    <span className="metric-icon">💰</span>
                                    <div>
                                        <div className="metric-value">{restaurantInfo.costForTwoMessage}</div>
                                        <div className="metric-label">Cost for Two</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu Items Section */}

            <div className="menu-items-section">
                <h2 className="menu-section-title">🍽️ Menu</h2>

                {menu.length > 0 ? (
                    <div className="menu-items-grid">
                        {menu.map((item) => (
                            <div key={item.id} className="menu-item-card">
                                <div className="item-image-container">
                                    {item.imageId && (
                                        <img
                                            src={item.imageId}
                                            alt={item.name}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('no-image');
                                            }}
                                        />
                                    )}
                                    <span className="item-veg-icon">
                                        {item.isVeg === 1 ? '🌱' : '🍖'}
                                    </span>
                                </div>

                                <div className="item-content">
                                    <p className="item-category">{item.category}</p>
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-description">
                                        {item.description?.substring(0, 70)}
                                        {item.description?.length > 70 ? "..." : ""}
                                    </p>

                                    <div className="item-footer">
                                        <div className="item-price-rating">
                                            <span className="item-price">₹{item.price ? (item.price / 100).toFixed(0) : "N/A"}</span>
                                            {item.ratings?.aggregatedRating && (
                                                <span className="item-rating">
                                                    <span className="item-rating-star">⭐</span>
                                                    {item.ratings.aggregatedRating.rating}
                                                </span>
                                            )}
                                        </div>
                                        <button className="add-button">+ Add</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-items-message">
                        <p>📭 No menu items available</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;