import { IMAGE_URL } from "../utils/constant";

const CartItems = (props) => {
  const { name, description, imageId, price } = props?.cartData;

  return (
    <div className="mx-4 my-4 w-64 h-72 rounded p-2 hover:bg-white border hover:border-white ">
      <div className="">
        <img
          className="cart_image"
          src={IMAGE_URL + imageId}
          alt="image not found"
        />
      </div>

      <div className="">
        <h3 className="font-bold text-base py-1">{name}</h3>
        <p className="text-xs py-1">{description}</p>
      </div>

      <div className="flex justify-center text-sm	">
        <p className="">₹{price / 100} FOR TWO</p>
      </div>
    </div>
  );
};

export default CartItems;
