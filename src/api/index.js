import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaceData = async (sw, ne) => {
  try {
    const {data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lat,
        tr_longitude: ne.lat,
      },
      headers: {
        "x-rapidapi-key": "a7bc143ab1msh97ffb5449fe72e9p12f4a8jsnb5d08facbb68",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
