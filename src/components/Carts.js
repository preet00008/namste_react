import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { removeItems } from "../utils/cartSlice";

const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCart = () =>{
    dispatch(removeItems());
  }

  return (
    <>
      <button className="rounded-full	w-24 h-10 m-3 bg-red-600 text-white hover:bg-red-400" onClick={()=>clearCart()}>Clear Cart</button>
      <div className="flex flex-wrap my-2 mx-2">
        {cartItems.map((cart) => {
          return <CartItems key={cart?.id} cartData={cart} />;
        })}
      </div>
    </>
  );
};

export default Carts;
