import axios from "axios";

export const createContact = async (formData) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/contact/create`,
      formData
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
