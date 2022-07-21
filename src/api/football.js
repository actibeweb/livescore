import axios from "axios";

export const getFixtures = async (formData) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/match/getByFilter/soccer`,
      formData
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);     
    throw new err();
  }
};

export const getFixtureById = async (id) => {
 

  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/match/get/${id}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new err();
  }
};
