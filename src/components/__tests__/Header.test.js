import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  // load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //   const logo = header.getAllByTestId("logo");    getall is like we use className it will take all the data in array
  // expect(logo[0].src).toBe("http://localhost/dummy.png");

  // check if logo is loaded
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("check online status in header", () => {
  // online status
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const Online = header.getByTestId("online-status");
  expect(Online.innerHTML).toBe("✅");
});

test("Chart item Should be 0", () => {
  
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const Cart = header.getByTestId("cartItem");
  expect(Cart.innerHTML).toBe("Cart 0");
});
