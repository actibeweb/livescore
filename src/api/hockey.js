import axios from "axios";

export const getFixtures = async (date) => {
    const options = {
        method: 'GET',
        url: 'https://api-hockey.p.rapidapi.com/games/',
        params: {date: '2020-10-02'},
        headers: {
          'X-RapidAPI-Key': '97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499',
          'X-RapidAPI-Host': 'api-hockey.p.rapidapi.com'
        }
      };

      try {
        const {data} = await axios(options);
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
}