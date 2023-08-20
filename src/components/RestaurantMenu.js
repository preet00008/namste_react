import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { LINK_URL } from "../utils/constant";
import { useEffect } from "react";

const RestaurantMenu = () => {
  var url = new window.URL(LINK_URL);
  const urlParams = new window.URLSearchParams(window.location.search);
  const collectionId = urlParams.get("id");
  url.searchParams.append("collection", collectionId);
  // console.log(url.href);
  
  useEffect(()=>{
    restautantData();
  },[]);

  
  async function restautantData (){
      console.log(url.href);
      const data = await fetch(url.href);
      const json = await data.json();
      // console.log("body", json)
    }
  


  // if (!resData) return <ShimmerUi />;

  return (
    <>
      <div className="bg-slate-100">
        <div className="py-8 flex">
          <div className=" ml-8 rounded">
            {/* <img src={IMAGE_URL + resDataInfo?.cloudinaryImageId} /> */}
          </div>

          <div className="pl-4">
            {/* <h3 className="text-3xl font-semibold py-4">{resDataInfo?.name}</h3>
            <p className=" p-2">{resDataInfo?.cuisines}</p>
            <p className=" p-2">{resDataInfo?.costForTwoMessage}</p>
            <p className=" p-2">{resDataInfo?.avgRating} stars</p>
            <p className=" p-2">{resDataInfo?.city}</p> */}
          </div>
        </div>
      </div>

      {/* <div className="bg-slate-100">
        <h1 className=" text-center  text-2xl font-bold">MENU</h1>
        <ul className="m-2" data-testid="menu">
          {menuDetails.map((item) => {
            return (
              <>
                <div className="border hover:border-slate-100  p-2 m-2 flex">
                  <div className="flex-1">
                    <li className="hover:font-bold" key={item?.card?.info?.id}>
                      {item?.card?.info?.name}
                    </li>
                    <li>₹ {item?.card?.info?.price / 100}</li>
                    <li>
                      <span className=" text-slate-500">{item?.card?.info?.description}</span></li>

                    <button data-testid="menu-btn"
                      className="rounded-full	w-24 h-10 p-2	mt-2 bg-red-600 text-white hover:bg-red-400"
                      onClick={() => addItems(item?.card?.info)}
                    >Add items +
                    </button>
                  </div>

                  <div className="justify-end flex-none">
                    <img
                      className="rounded w-36"
                      src={IMAGE_URL + item?.card?.info?.imageId}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};

export default RestaurantMenu;
