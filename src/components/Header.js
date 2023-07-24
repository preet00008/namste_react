import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

const Logo = () => (
  <a href="/">
    <img data-testid="logo" className="h-28 p-2" alt="logo" src={logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between text-lg font-medium drop-shadow-md	rounded">
        <Logo />
        <div className="nav-item">
          <ul className="flex py-10">

            <li className="px-2 text-red-600	hover:text-red-300">
              <Link to="/">
                Home
              </Link>
            </li>
            
            {/* <li className="px-2 text-red-600	hover:text-red-300">
              <Link to="/instamart">
                Instramart
              </Link>
            </li> */}

            <li className="px-2 text-red-600	hover:text-red-300">
              <Link to="/about">
                About us
              </Link>
            </li>

            <li className="px-2 text-red-600	hover:text-red-300">
              <Link  to="/contact">
                Contact us
              </Link>
            </li>

            <li className="px-2 text-red-600	hover:text-red-300">
              <Link to="/cart">
                <span data-testid="cartItem" className="p-1">Cart {cartItems.length}</span> 
              </Link>
            </li>
            <li className="px-2 ">
                <span data-testid="online-status" className="p-1">{
                isOnline ? "✅" : "🔴" }</span>
            </li>

            {isLoggedIn == true ? (
              <li
                className="px-2 text-red-600	hover:text-red-300"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                login
              </li>
            ) : (
              <li
                className="px-2 text-red-600	hover:text-red-300"
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
