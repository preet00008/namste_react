import { useEffect, useState } from "react";
// import restrauntList from "../utils/mockdata";
import Carts from "./Carts";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    // Api call
    getAllRestraunts();
  }, []);


  async function getAllRestraunts(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
      
    // optional chaning
    setRestrauntData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  // not render component (Early return)
  // if(!restrauntData) return null;

  return (restrauntData.length === 0 ) ? <ShimmerUi/> : (
    <div className="app_body">

      {/* search start */}
      
      <div className="searchbar">
        <div className="search_filed">
          <input className="search_bar"
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
              setFilterdRestraunt(Filter_list);
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

        <div className="clearfilter">
          <button className="clearfilter_button" onClick={()=>{setFilterdRestraunt(restrauntData);}}>Clear All the Filter</button>
        </div>
      </div>
      
      {/*top res filter end*/}

      {/* carts start */}
      <div className="cart-container">
        {filterdRestraunt.map((restaurant) => {
          return (
          <Link to={"/restaurant/" + restaurant.data.id}  key={restaurant.data.id}><Carts  resData={restaurant} />
          </Link>
          );
        }
        )}
      </div>
      {/* cart ends */}
    </div>
  );
};

export default Body;
