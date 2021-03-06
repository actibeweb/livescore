import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { getArticleById } from "../api/article";
import Loader from "../components/Common/Loader";
const ArticleDetail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const getArticleHandler = async (id) => {
    try {
      setLoading(true);
      const data = await getArticleById(id);
      console.log(data);
      if (data.err) {
        setLoading(false);

        return;
      }
      setLoading(false);
      setArticle(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getArticleHandler(id);
  }, []);

  return (
    <>
      {loading && !article ? (
        <Loader />
      ) : (
        <div className="content-info">
          <div className="container paddings-mini">
            <div className="row">
              <div className="col">
                {/* Content Text*/}
                <div className="panel-box">
                  <div className="titles no-margin">
                    <h4>{ article && article.title}</h4>
                  </div>
                  <img src={ article.image && article.image.url} alt="" />
                  <div className="info-panel">
                   <p>{ article && article.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleDetail;
