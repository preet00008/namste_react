import { useState, useEffect } from "react";

const useRestaurantMenu = (props) =>{
    // const { resId } = props;
    const [resData, setResData] = useState();
  
    useEffect(() => {
      getRestaurantDetails();
    }, []);
  
    async function getRestaurantDetails() {
        const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${props.id}&submitAction=ENTER`
      );
  
      const json = await data.json();
      
      setResData(json?.data?.cards[0]?.card?.card?.info);
    }

    return resData;
    
}

export default useRestaurantMenu;