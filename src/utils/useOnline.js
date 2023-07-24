import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const CheckOnline = () => {
      setIsOnline(true);
    };
    const CheckOnffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", CheckOnline);
    window.addEventListener("offline", CheckOnffline);

    return () => {
      window.removeEventListener("online", CheckOnline);
      window.removeEventListener("offine", CheckOnffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
