import axios from "axios";

export const getAllArticles = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/article/getAllArticles`
      );
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  export const getArticleById = async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/article/getArticleById/${id}`,{},"GET"
      );
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };