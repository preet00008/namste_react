import logo from "../../images/logo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
