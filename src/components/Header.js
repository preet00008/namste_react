import { useState } from "react";
import logo from "../assets/img/logo.png";


const Header = () => {

  const [login, setLogin] = useState(true);

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="header-list">
        <ul className="navbar">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
      {
        (login == true) ? <li onClick={()=>{
          setLogin(false);
        }}>login</li> : 
        <li onClick={()=>{
          setLogin(true);
        }}>logout</li>
      }
        </ul>
      </div>
        
    </div>
  );
};

export default Header;
