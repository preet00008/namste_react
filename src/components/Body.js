import { useContext, useEffect, useState } from "react";
import { GET_ALL_RESTAURANT_URL, LINK_URL, URL } from "../utils/constant";
import Cards from "./Cards";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterSearch } from "../utils/constant";
import UserContext from "../utils/UserContext";
import Offers from "./Offers";
import { URLSearchParams } from "url";

const Body = () => {
  const [restrauntData, setRestrauntData] = useState([]);
  const [offersRestraunt, setOffersRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getAllRestraunts(); //API Call
  }, []);

  const generateId = (url) => {
    url = new window.URL(url).search;
    const urlParams = new window.URLSearchParams(url);
    const collectionId = urlParams.get("collection_id");
    return collectionId;
  };

  async function getAllRestraunts() {
    const data = await fetch(GET_ALL_RESTAURANT_URL + "/swiggy");
    const json = await data.json();
    console.log("body", json?.data.cards[1]?.card?.card?.imageGridCards?.info);

    // optional chaning
    setRestrauntData(json?.data.cards[1]?.card?.card?.imageGridCards?.info);
    setOffersRestraunt(json?.data.cards[0]?.card?.card?.imageGridCards?.info);
  }

  // not render component (Early return)
  if (!restrauntData) return <ShimmerUi />;

  return (
    <div className="p-3">
      <div className="flex py-2 justify-center">
        <div className="flex px-2">
          <div className="justify-center">
            <input
              data-testid="serach-input"
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              data-testid="search"
              className="rounded-full	w-24 h-10	 bg-red-600 text-white hover:bg-red-400"
              onClick={() => {
                const data = filterSearch(searchText, restrauntData);
                setFilterdRestraunt(data);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="px-2">
          <button
            className="rounded-full	p-2 bg-red-600 text-white hover:bg-red-400"
            onClick={() => {
              const Filter_list = restrauntData.filter(
                (res) => res.data.avgRating > 4
              );
              setFilterdRestraunt(Filter_list);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="px-2">
          <button className="rounded-full	p-2 bg-red-600 text-white hover:bg-red-400">
            Offers %
          </button>
        </div>

        <div className="px-2">
          <button className="rounded-full	p-2 bg-red-600 text-white hover:bg-red-400">
            Help{" "}
          </button>
        </div>

        <div className="px-2">
          <button
            className="rounded-full	p-2 bg-red-600 text-white hover:bg-red-400"
            onClick={() => {
              setFilterdRestraunt(restrauntData);
            }}
          >
            Clear All the Filter
          </button>
        </div>
      </div>
      {/* offers start */}
      <h1 className=" text-lg font-semibold m-2 p-2">BEST OFFERS FOR YOU</h1>
      <div className="flex flex-wrap my-2 mx-2">
        {offersRestraunt.map((restaurant, index) => {
          if (index < 3)
            return (
              <div key={index}>
                <Offers resData={restaurant} />
              </div>
            );
        })}
      </div>
      {/* offers end */}

      {/* Cards start */}
      <div data-testid="res-list" className="flex flex-wrap my-2 mx-2">
        {/* {filterdRestraunt.map((restaurant, index) => { */}
        {restrauntData.map((restaurant, index) => {
          return (
            <Link
              className=""
              to={"/collections?id=" + generateId(restaurant?.action?.link)}
              key={restaurant?.id}
            >
              <Cards resData={restaurant} />
            </Link>
          );
        })}
      </div>
      {/* Cards ends */}
    </div>
  );
};

export default Body;
