import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTRAUNTDATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTRAUNTDATA);
    },
  });
});

test("Shimmer test", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const Shimmer = body.getByTestId("shimmer");

  expect(Shimmer.children.length).toBe(16);

  //   console.log(Shimmer.children);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("Search on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search")));

  const input = body.getByTestId("serach-input");

  fireEvent.change(input, {
    target: {
      value: "pizza",
    },
  });

  const searchbtn = body.getByTestId("search");
  fireEvent.click(searchbtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
});
