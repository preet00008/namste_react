import { useEffect, useState } from "react";
import restrauntList from "../utils/mockdata";
import Carts from "./Carts";
import ShimmerUi from "./ShimmerUi";

function filterSearch(searchText, restrauntData) {
  const filterData = restrauntData.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [restrauntData, setRestrauntData] = useState([]);
  const [filterdRestraunt, setFilterdRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");
  console.log("render()", restrauntData);

  useEffect(() => {
    // Api call
    getAllRestraunts();
  }, []);


  async function getAllRestraunts(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
      
    // optional chaning
    setRestrauntData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestraunt(json?.data?.cards[2]?.data?.data?.cards);

  }


  return (restrauntData.length === 0 ) ? <ShimmerUi/> : (
    <div className="app_body">

      {/* search start */}
      <div className="searchbar">
        <div className="search_filed">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search_button"
            onClick={() => {
              const data = filterSearch(searchText, restrauntData);
              setFilterdRestraunt(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {/* search ends */}
      
      {/*top res filter start*/}
      <div className="button_container">
        <div className="filter">
          <button className="filter_button"
            onClick={() => {
              const Filter_list = restrauntData.filter(
                (res) => res.data.avgRating > 4
              );
              console.log(Filter_list); 
              setRestrauntData(Filter_list);
            }}>
            Top Rated Restaurants
          </button>
        </div>

        <div className="offers">
          <button className="offer_button">Offers %</button>
        </div>

        <div className="help">
          <button className="help_button">Help </button>
        </div>
      </div>
      {/*top res filter end*/}

      {/* carts start */}
      <div className="cart-container">
        {filterdRestraunt.map((restaurant) => {
          return <Carts key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
      {/* cart ends */}
    </div>
  );
};

export default Body;
