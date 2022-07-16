import React from "react";

const About = () => {
  return (
    <section className="content-info">
      {/* White Section */}
      <div className="paddings">
        <div className="container">
      <h2 style={{ color: "white",fontSize:"2rem" }}>About Us</h2>
          <div className="row">
            <div className="col-lg-5">
              <img src="img/locations/1.jpg" alt="" />
            </div>
            <div className="col-lg-7">
              <h4 className="subtitle" style={{ color: "#FF8A00" }}>
                <span>Company Value</span>
                Who Are You
              </h4>
              <p>
                The top seeds in Groups C and D both have designs on winning
                their respective sections. But if one of them advances as a
                group winner and the other as a runner-up, then we will be
                seeing Lionel Messi facing off against Antoine Griezmann either
                in Kazan (30 June) or Nizhny Novgorod (1 July), depending on
                their team’s group placings.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <h5 style={{ color: "#FF8A00" }}>Our Mission</h5>
                  <p>
                    Lorem iur adipiscing elit. Ut vehicula dapibus augue nec
                    maximustiam eleifend magna erat, quis vestibulum lacus
                    mattis sit ametec pellentesque lorem sapien.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h5>Our Vision</h5>
                  <p>
                    Lorem iur adipiscing elit. Ut vehicula dapibus augue nec
                    maximustiam eleifend magna erat, quis vestibulum lacus
                    mattis sit ametec pellentesque lorem sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      {/* End White Section */}
      {/* Parallax Section */}
    
    </section>
  );
};

export default About;
