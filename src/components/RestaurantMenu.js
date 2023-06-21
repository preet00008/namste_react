import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const resId = useParams();
  const resData = useRestaurantMenu(resId);

  const resDataInfo = resData?.cards[0]?.card?.card?.info;

  const menuDetails =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
      .itemCards;

  const dispatch = useDispatch();

  const addItems = (item) => {
    dispatch(addItem(item));
  };


  if (!resData) return <ShimmerUi />;

  return (
    <>
      <div className="bg-slate-100">
        <div className="py-8 flex">
          <div className=" ml-8 rounded">
            <img src={IMAGE_URL + resDataInfo?.cloudinaryImageId} />
          </div>

          <div className="pl-4">
            <h3 className="text-3xl font-semibold py-4">{resDataInfo?.name}</h3>
            <p className=" p-2">{resDataInfo?.cuisines}</p>
            <p className=" p-2">{resDataInfo?.costForTwoMessage}</p>
            <p className=" p-2">{resDataInfo?.avgRating} stars</p>
            <p className=" p-2">{resDataInfo?.city}</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-100">
        <h1 className=" text-center  text-2xl font-bold">MENU</h1>
        <ul className="m-2">
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

                    <button
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
      </div>
    </>
  );
};

export default RestaurantMenu;
