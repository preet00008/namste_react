import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorShow = useRouteError();
    console.log("errorShow", errorShow);
  return (
    <div className="error_container">
        <h1 className="">
            Oops! You went Wrong
        </h1>
        <h2>{errorShow.statusText}</h2>
        <h3>{errorShow.status}</h3>
    </div>
  );
};

export default Error;