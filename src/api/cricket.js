import axios from "axios";

export const getFixturesByDate = async () => {
  const options = {
    method: "GET",
    url: "https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2022-07-07",
    headers: {
      "X-RapidAPI-Key": "97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499",
      "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios(options);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
