import { useContext, useEffect, useState } from "react";
import { GET_ALL_RESTAURANT_URL } from "../utils/constant";
import Carts from "./Carts";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterSearch } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [restrauntData, setRestrauntData] = useState([]);
  const [filterdRestraunt, setFilterdRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getAllRestraunts(); //API Call
  }, []);

  async function getAllRestraunts() {
    const data = await fetch(GET_ALL_RESTAURANT_URL);

    const json = await data.json();

    // optional chaning
    setRestrauntData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  // not render component (Early return)
  // if(!restrauntData) return null;

  return restrauntData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="p-3 bg-slate-100">
      <div className="flex py-2 justify-center">
        <div className="flex px-2">
          <div className="justify-center">
            <input
              className="bg-slate-100 "
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <input
              className="bg-slate-100 "
              type="text"
              value={user.name}
              onChange={(e) => {
                console.log(e);
                setUser({
                  ...user,
                  name : e.target.value,
                });
              }}
            />
            <input
              className="bg-slate-100 "
              type="text"
              value={user.email}
              onChange={(e) => {
                console.log(e);
                setUser({
                  ...user,
                  email : e.target.value,
                });
              }}
            />
            <button
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

      {/* carts start */}
      <div className="flex flex-wrap my-2 mx-2">
        {filterdRestraunt.map((restaurant) => {
          return (
            <Link
              className=""
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <Carts resData={restaurant} />
            </Link>
          );
        })}
      </div>
      {/* cart ends */}
    </div>
  );
};

export default Body;
