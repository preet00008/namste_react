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

    <div className="cart">

      <div className="cart-image-continer">
        <img
          className="cart_image"
          src={IMAGE_URL + cloudinaryImageId}
          alt="image not found"
        />
      </div>

      <div className="cart_heading">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
      </div>

      <div className="cart_items">
        <p>{avgRating} stars</p> <p> . </p>
        <p>{maxDeliveryTime} mins </p> <p> . </p>
        <p>₹{costForTwo / 100} FOR TWO</p>
      </div>

    </div>

  );

};

export default Carts;
