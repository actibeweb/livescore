import axios from "axios";

export const getFixtures = async (date) => {
  const options = {
    method: "GET",
    url: `https://tennis-live-data.p.rapidapi.com/matches-by-date/${date}`,
    headers: {
      "X-RapidAPI-Key": "97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499",
      "X-RapidAPI-Host": "tennis-live-data.p.rapidapi.com",
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

export const getFixturesById = async (id) => {
  const options = {
    method: "GET",
    url: `https://tennis-live-data.p.rapidapi.com/match/${id}`,
    headers: {
      "X-RapidAPI-Key": "97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499",
      "X-RapidAPI-Host": "tennis-live-data.p.rapidapi.com",
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
