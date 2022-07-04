import axios from "axios";



export const getFixtures=async(date)=>{
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {date: date},
        headers: {
          'X-RapidAPI-Key': '97583ea2d3mshbbb0eaad4ab4058p12dad2jsn6981e3b54499',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

    try {
        const {data} = await axios(options);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        throw new err();
    }
}