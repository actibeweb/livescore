import React, { useState, useEffect } from "react";
import { getAboutDetails } from "../../api/common";
import Loader from "../Common/Loader";
import { Helmet } from "react-helmet";
const About = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(undefined);
  const getDetails = async () => {
    try {
      setLoading(true);
      const data = await getAboutDetails();
      console.log(data);
      setDetails(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {loading && !details ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>Clockscore | About</title>
          </Helmet>
          <section className="content-info">
            {/* White Section */}
            <div className="paddings">
              <div className="container">
                <h2 style={{ color: "white", fontSize: "2rem" }}>About Us</h2>
                <div className="row">
                  <div className="col-lg-5">
                    <img src={details && details.image.url} alt="" />
                  </div>
                  <div className="col-lg-7">
                    <h4 className="subtitle" style={{ color: "#FF8A00" }}>
                      <span style={{ fontSize: "2rem" }}>
                        {details && details.headingMain}
                      </span>
                      {details && details.headingOne}
                    </h4>
                    <p>{details && details.contentOne}</p>
                    <div className="row">
                      <div className="col-lg-6">
                        <h5 style={{ color: "#FF8A00" }}>
                          {details && details.headingTwo}
                        </h5>
                        <p>{details && details.contentTwo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End White Section */}
            {/* Parallax Section */}
          </section>
        </>
      )}
    </>
  );
};

export default About;
