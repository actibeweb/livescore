import axios from "axios";

export const getLogo = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/logo/get`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getCategories = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/category/get`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAboutDetails = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/about/get`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getContactPage = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/contact/getPage`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getTerms = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/terms/get`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}