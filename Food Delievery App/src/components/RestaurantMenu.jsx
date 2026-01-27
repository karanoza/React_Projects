import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [menu, setMenu] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (resId) {
            fetchMenu(resId);
        }
    }, [resId]);

    const fetchMenu = async (restaurantId) => {
        try {
            setLoading(true);
            setError(null);

            // Fetch from your backend API (mock data from RestaurantsMenu.json)
            const apiUrl = `http://localhost:5001/api/menu?restaurantId=${restaurantId}`;
            console.log("Fetching from backend:", apiUrl);

            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Full menu data:", data);

            // Parse the mock JSON response structure
            if (data && data.data && data.data.cards) {
                // Extract restaurant info from first card
                const restaurantData = data.data.cards[0]?.card?.card?.info;
                console.log("Restaurant Info:", restaurantData);
                
                if (restaurantData) {
                    setRestaurantInfo(restaurantData);
                }

                // Extract menu items from second card (gridElements)
                const itemCards = data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.itemCards;
                console.log("Menu Items Cards:", itemCards);

                if (itemCards && Array.isArray(itemCards)) {
                    const items = itemCards.map(item => item.card?.info).filter(Boolean);
                    console.log("Extracted items:", items);
                    setMenu(items);
                }
            }
        } catch (err) {
            console.error("Error fetching menu:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

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

    // Main menu rendering
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