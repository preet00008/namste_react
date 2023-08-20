import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {

  const {user} = useContext(UserContext);


  return (
    <footer className="bg-gray-900 text-white p-4 sticky bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <h1>{user.name} - {user.email} </h1>
      </div>
    </footer>
  );
};


export default Footer;