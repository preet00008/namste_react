import { IMAGE_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { resData } = props;
  const { imageId } = resData;
  const { user } = useContext(UserContext);

  return (
    // <Link className="" to='/collections' >
      <div className="mx-4 my-4 w-40 h-56 rounded-full p-2 hover:bg-white  hover:border-white ">
        {/* {collectionId} */}
        <div className="">
          <img
            className="rounded-full"
            src={IMAGE_URL + imageId}
            alt="image not found"
          />
        </div>

        {/* <div className="">
        <h3 className="font-bold text-base py-1">{name}</h3>
        <p className="text-xs py-1">{cuisines.join(", ")}</p>
      </div> */}

        {/* <div className="flex justify-center text-sm	">
        <p className="">{avgRating} stars</p>
        <p className="px-2"> . </p>
        <p>{maxDeliveryTime} mins </p>
        <p className="px-2"> . </p>
        <p className="">₹{costForTwo / 100} FOR TWO</p>
      </div> */}
        {/* <h1>{user.name} - {user.email} </h1> */}
      </div>
    // </Link>
  );
};

export default Cards;
