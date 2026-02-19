import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [menu, setMenu] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (resId) {
            fetchMenu(resId);
        }
    }, [resId]);

    // Fetch restaurant menu and info from backend API

    const fetchMenu = async (restaurantId) => {
        try {
            setLoading(true);
            setError(null);

            const apiUrl = `http://localhost:5001/api/menu?restaurantId=${restaurantId}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (data && data.data && data.data.cards) {
                // Extract restaurant info from first card
                const restaurantData = data.data.cards[0]?.card?.card?.info;
                if (restaurantData) {
                    setRestaurantInfo(restaurantData);
                }

                // Extract menu items from second card (gridElements)
                const itemCards = data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.itemCards;
                if (itemCards && Array.isArray(itemCards)) {
                    const items = itemCards.map(item => item.card?.info).filter(Boolean);
                    setMenu(items);
                } else {
                    setMenu([]);
                }
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { menu, restaurantInfo, loading, error };
};

export default useRestaurantMenu;