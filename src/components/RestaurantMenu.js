import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUi from "./ShimmerUi";

const RestaurantMenu = () => {
  const resId = useParams();
  const resData = useRestaurantMenu(resId);

  if (!resData) return <ShimmerUi />;

  return (
    <>
      <div className="bg-slate-100">
        <div className="py-8 flex">
          <div className=" ml-8 rounded">
            <img src={IMAGE_URL + resData?.cloudinaryImageId} />
          </div>

          <div className="pl-4">
            <h3 className="text-3xl font-semibold py-4">{resData?.name}</h3>
            <p className=" p-2">{resData?.cuisines}</p>
            <p className=" p-2">{resData?.costForTwoMessage}</p>
            <p className=" p-2">{resData?.avgRating} stars</p>
            <p className=" p-2">{resData?.city}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
