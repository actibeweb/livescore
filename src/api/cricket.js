import axios from "axios";

export const getFixturesByDate = async (date) => {
  const options = {
    method: 'GET',
    url: `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${date}`,
    headers: {
      'X-RapidAPI-Key': '97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
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
    method: 'GET',
    url: `https://cricket-live-data.p.rapidapi.com/match/${id}`,
    headers: {
      'X-RapidAPI-Key': '97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
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

export const getCustomFixture= async (formData) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/match/getByFilter/baseball`,
      formData
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);     
    throw new err();
  }
}

export const getCustomFixtureById = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/match/get/${id}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new err();
  }
}
