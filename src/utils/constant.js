// old api
// export const GET_ALL_RESTAURANT_URL =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";

export const OFFERS_IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

export const IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
export const LINK_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING`;

export const GET_ALL_RESTAURANT_URL = "http://localhost:5000";

export const RESTLIST_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=83647&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTIN";

export function filterSearch(searchText, restrauntData) {
  const filterData = restrauntData.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterData;
}
