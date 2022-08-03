import React, { useState, useEffect } from "react";
import { getAllArticles } from "../api/article";
import Loader from "../components/Common/Loader";
import { Link } from "react-router-dom";
const Article = () => {
  const [articles, setArticles] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const getArticlesHandler = async () => {
    try {
      setLoading(true);
      const data = await getAllArticles();
      console.log(data);
      if (data.err) { 
        setLoading(false);

        return;
      }
      setArticles(data);

      setLoading(false);
    } catch (err) {
      console.log(err);

      setLoading(false);
    }
  };
  useEffect(() => {
    getArticlesHandler();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          className="content-info "
          style={{ backgroundColor: "#0B0B0B" }}
        >
          <div
            className="container paddings-mini"
            style={{ backgroundColor: "#0B0B0B" }}
          >
            <div className="row" style={{ backgroundColor: "#0B0B0B" }}>
              <div className="col-lg-12" style={{ backgroundColor: "#0B0B0B" }}>
                {/* Content Text*/}
                <div className="panel-box">
                  <div className="titles">
                    <h4>Recent Blogs</h4>
                  </div>
                  {/* Post Item */}
                  {articles &&
                    articles?.map((article, index) => {
                      return (
                        <div className="post-item" key={index}>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="img">
                                <Link to={`/blog/${article._id}`}>
                                  <img
                                    src={article.image.url}
                                    alt=""
                                    className="img-responsive"
                                  />
                                </Link>
                                <div className="overlay">
                                  <a href="single-news.html">+</a>
                                </div>
                              </div>
                            </div>

                            <div className="col">
                              <h5>
                                <Link to={`/blog/${article._id}`}>
                                  {article.title}
                                </Link>
                              </h5>

                              <p>
                                {article.content.substring(0, 40)}
                                <Link to={`/blog/${article._id}`}>
                                  Read More [+]
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {/* End Content Text*/}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Article;
