import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";   
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />   {/* for dynimc change which child want to run */}
      <Footer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children:[
      {
        path : "/",
        element : <Body/>
      },{
        path : "about",
        element : <About/>
      },{
        path : "contact",
        element : <Contact/>
      },{
        path:"restaurant/:id",
        element : <RestaurantMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
