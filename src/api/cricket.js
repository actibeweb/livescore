import axios from "axios";

export const getFixturesByDate = async (formData) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/match/getByFilter/cricket`,
      formData
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const getFixturesById = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/match/get/${id}`
    );
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
      `${process.env.REACT_APP_API_URL}/match/getByFilter/cricket`,
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
