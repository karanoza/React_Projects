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

const resList = [
  {
    info: {
      id: "14780",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/89c45acc-d48c-4c08-a8cf-2e552d58b89b_14780.JPG",
      locality: "Hinjewadi",
      areaName: "Hinjawadi",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "1.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/pizza-hut-hinjewadi-hinjawadi-rest14780",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "441447",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/e6ff8fe3-b2ec-4d32-bcad-491f22b447a7_441447.jpg",
      locality: "Suratwala",
      areaName: "Hinjawadi",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "11K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/burger-king-suratwala-hinjawadi-rest441447",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "64174",
      name: "Aroma's Hyderabad House",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/21/fb3ee38c-fb82-466b-91fc-7c3f93ba2da4_64174.jpg",
      locality: "Balewadi",
      areaName: "Baner_Pizza",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
      avgRating: 4.3,
      parentId: "71",
      avgRatingString: "4.3",
      totalRatingsString: "41K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹84",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "1.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/aromas-hyderabad-house-balewadi-baner-pizza-rest64174",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3417",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9b88775c-2e55-4653-ac27-9ef69d3e2947_3417.jpg",
      locality: "Blue Ridge Township",
      areaName: "Hinjawadi",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "14K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 22:51:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/subway-blue-ridge-township-hinjawadi-rest3417",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23716",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/eff49cf3-d043-4703-a2de-6f84600c6501_23716.JPG",
      locality: "Marunji Road",
      areaName: "Hinjawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "46K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/mcdonalds-marunji-road-hinjawadi-rest23716",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "89140",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/3363a3f2-800e-449e-979a-14fd90d1e2a3_89140.JPG",
      locality: "Wakad Road",
      areaName: "Hinjawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/kfc-wakad-road-hinjawadi-rest89140",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4872",
      name: "Ghar Ka Khana - Since 2005",
      cloudinaryImageId: "f7b365c641d99818f272b5490f034226",
      locality: "Hinjewadi",
      areaName: "Hinjawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Punjabi", "Thalis", "Kebabs", "Chinese"],
      avgRating: 4.2,
      parentId: "472753",
      avgRatingString: "4.2",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹130",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/ghar-ka-khana-since-2005-hinjewadi-hinjawadi-rest4872",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "298722",
      name: "The Bombay Paratha Company",
      cloudinaryImageId: "iphg47c6ejdjoqpvy8zi",
      locality: "Jambulkar Nagar",
      areaName: "Hinjawadi",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Desserts",
        "Beverages",
        "Indian",
        "Breakfast",
        "paratha",
      ],
      avgRating: 3.9,
      parentId: "10827",
      avgRatingString: "3.9",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/the-bombay-paratha-company-jambulkar-nagar-hinjawadi-rest298722",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "558827",
      name: "HRX by EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/6/c0ce7755-7bfd-4fdc-8ad4-539eff860d43_558827.JPG",
      locality: "Opp Yes bank, Nr. H P Gas",
      areaName: "Hinjawadi",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Burgers"],
      avgRating: 4.5,
      parentId: "335529",
      avgRatingString: "4.5",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "High%20Protein/rx%20tag%205.png",
            description: "High Protein",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "High Protein",
                  imageId: "High%20Protein/rx%20tag%205.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/hrx-by-eatfit-opp-yes-bank-nr-h-p-gas-hinjawadi-rest558827",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "872653",
      name: "Good Flippin' Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/3745f9e0-303a-4430-a0e0-2e1d52a73cfa_872653.JPG",
      locality: "Hinjewadi",
      areaName: "Hinjawadi",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.4,
      parentId: "11748",
      avgRatingString: "4.4",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.7",
          ratingCount: "292",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/good-flippin-burgers-hinjewadi-hinjawadi-rest872653",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639528",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "zvvosi8aw7mujogghnqk",
      locality: "Global Highstreet Mall",
      areaName: "Hinjawadi",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4.2,
      parentId: "351013",
      avgRatingString: "4.2",
      totalRatingsString: "417",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/dum-safar-biryani-global-highstreet-mall-hinjawadi-rest639528",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "732719",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/44a9f826-3ca7-4fff-8583-e19218e5e520_732719.JPG",
      locality: "Hinjawadi",
      areaName: "Hinjawadi",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "274",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/theobroma-hinjawadi-rest732719",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "197247",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/afa16685-36e7-4800-92b6-18cff3d78dc4_197247.jpg",
      locality: "2nd Phase",
      areaName: "Wakad",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "4.9K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹58",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/the-belgian-waffle-co-2nd-phase-wakad-rest197247",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "728539",
      name: "Goila Butter Chicken",
      cloudinaryImageId: "2acf0681a049dea7dac7271cf7ccc560",
      locality: "CHINCHWAD",
      areaName: "WAKAD",
      costForTwo: "₹600 for two",
      cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
      avgRating: 3.8,
      parentId: "322587",
      avgRatingString: "3.8",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/goila-butter-chicken-chinchwad-wakad-rest728539",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "745868",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/086ad299-3c72-4b4f-ac24-3e5370601c10_745868.JPG",
      locality: "Hinjawadi",
      areaName: "Haveli",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "11633",
      avgRatingString: "4.2",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.2",
          ratingCount: "5",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-hinjawadi-haveli-rest745868",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "145719",
      name: "Bebe Di Rasoi - Punjabi",
      cloudinaryImageId: "ilovbsdcukuuath8ltza",
      locality: "Wakad",
      areaName: "Hinjawadi",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "230548",
      avgRatingString: "4.1",
      totalRatingsString: "35K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/bebe-di-rasoi-punjabi-wakad-hinjawadi-rest145719",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "182075",
      name: "Pind Punjab",
      cloudinaryImageId: "inuz5b1g03lxlrnck5kl",
      locality: "Hinjewadi",
      areaName: "Hinjawadi",
      costForTwo: "₹450 for two",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Chinese",
        "Biryani",
        "Thalis",
        "Mughlai",
        "Beverages",
        "Desserts",
        "Indian",
      ],
      avgRating: 4.2,
      parentId: "4196",
      avgRatingString: "4.2",
      totalRatingsString: "28K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹134",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/pind-punjab-hinjewadi-hinjawadi-rest182075",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3168",
      name: "Eatsome- Wraps & Rolls",
      cloudinaryImageId: "e56240a4b58956f47a5a1f8392470fbe",
      locality: "Shankar Kalat Nagar",
      areaName: "Wakad",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Street Food",
        "Biryani",
        "Snacks",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "471587",
      avgRatingString: "4.3",
      totalRatingsString: "34K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/eatsome-wraps-and-rolls-shankar-kalat-nagar-wakad-rest3168",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395196",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "zteez26u0kyxhgcttlhs",
      locality: "Marunji Road",
      areaName: "Hinjawadi",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "10761",
      avgRatingString: "4.2",
      totalRatingsString: "154",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-18 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/mcdonalds-gourmet-burger-collection-marunji-road-hinjawadi-rest395196",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "442847",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/16/69d1ec4b-4a93-45ee-b873-32b92a4e053b_442847.JPG",
      locality: "OPP YES BANK",
      areaName: "Hinjewadi",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.3",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-12-19 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b52dacdf-6f4b-4dbf-848f-827ce23b241c",
    },
    cta: {
      link: "https://www.swiggy.com/city/pune/the-dessert-heaven-pastry-brownie-and-cakes-opp-yes-bank-hinjewadi-rest442847",
      type: "WEBLINK",
    },
  },
];
const RestaurantCard = (props) => {
  const { resData, resName, cuisine, ratings, time, link } = props;

  const name = resData ? resData.name : resName;
  const cuisines = resData ? resData.cuisines : [cuisine];
  const avgRating = resData ? resData.avgRating : ratings;
  const slaString = resData ? resData.sla.slaString : time;
  const priceforTwo = resData ? resData.costForTwo : "N/A";
  const imageSrc = resData
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`
    : link;

  return (
    <div className="res-card">
      <img className="res-logo" src={imageSrc} alt="restaurant-logo" />
      <div className="card-content">
        <div className="res-name">{name}</div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div className="res-rating">⭐ {avgRating}</div>
        <div className="res-price">{priceforTwo}</div>
        <div className="res-time">{slaString}</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
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
