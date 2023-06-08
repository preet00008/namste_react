export const IMAGE_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const GET_ALL_RESTAURANT_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";

export function filterSearch(searchText, restrauntData) {
  const filterData = restrauntData.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterData;
}


