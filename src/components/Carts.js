import { IMAGE_URL } from "../utils/constant";

const Carts = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    maxDeliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = resData?.data;

  return (

    <div className="mx-4 my-4 w-64 h-72 rounded p-2 hover:bg-white border hover:border-white ">

      <div className="">
        <img
          className="cart_image"
          src={IMAGE_URL + cloudinaryImageId}
          alt="image not found"
        />
      </div>

      <div className="">
        <h3 className="font-bold text-base py-1">{name}</h3>
        <p className="text-xs py-1">{cuisines.join(", ")}</p>
      </div>

      <div className="flex justify-center text-sm	">
        <p className="">{avgRating} stars</p> 
        <p className="px-2"> . </p>
        <p>{maxDeliveryTime} mins </p> 
        <p className="px-2"> . </p>
        <p className="">₹{costForTwo / 100} FOR TWO</p>
      </div>

    </div>

  );

};

export default Carts;
