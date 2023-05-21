// import { useParams } from "react-router-dom";

// const RestaurantMenu = () =>{
//     const resId = useParams();
//     return(
//         <div>
//             {resId.id}
//         </div>
//     );
// };

// export default RestaurantMenu;





import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMAGE_URL } from "../utils/constant";

const RestaurantMenu = () =>{
    const resId = useParams();
    const [resData, setResData] = useState();
  
    useEffect(() => {
      getRestaurantDetails();
    }, []);
  
    async function getRestaurantDetails() {
        const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId.id}&submitAction=ENTER`
      );
  
      const json = await data.json();
      setResData(json?.data?.cards[0]?.card?.card?.info);
    }
  
    return (
      <>
        <div className="restaurant_menu">
          <div className="restaurant_img">
            <img src={IMAGE_URL + resData?.cloudinaryImageId} />
          </div>
  
          <div className="restaurant_menuItems">
            <h3>{resData?.name}</h3>
            <p>{resData?.cuisines}</p>
            <p>{resData?.costForTwoMessage}</p>
            <p>{resData?.avgRating} stars</p>
            <p>{resData?.city}</p>
          </div>
        </div>
      </>
    );
};

export default RestaurantMenu;
