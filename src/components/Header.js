import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";


const Header = () => {

  const [login, setLogin] = useState(true);


  return (
    <>
    <div className="header">
      <a href="/">
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      </a>
      <div className="header-list">
        <ul className="navbar">
          <li><Link  className="link" to="/">Home</Link></li>
          <li><Link className="link"  to="/about">About us</Link></li>
          <li><Link  className="link" to="/contact">Contact us</Link></li>
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
    </>
  );
};

export default Header;
