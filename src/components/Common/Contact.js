import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getContactPage } from "../../api/common";
import { createContact } from "../../api/contact";
import Loader from "../Common/Loader";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(undefined);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, subject, comment };

    try {
      setLoading(true);
      const data = await createContact(formData);
      console.log(data);
      if (data.err) {
        toast.error(data.err);
        setLoading(false);
        return;
      }
      toast.success("Message sent successfully");
      setLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setComment("");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Error in sending message");
    }
  };

  const getDetails = async () => {
    try {
      setLoading(true);
      const data = await getContactPage();
      console.log(data);
      setDetails(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      {loading ? (
        <Loader />
      ) : (
        <section className="content-info">
          <div className="container">
            <h2 style={{ color: "white", fontSize: "3rem" }}>Contact Us</h2>
            <div className="row paddings-mini">
              {/* Left Content */}
              <div className="col-md-4">
                <aside className="panel-box">
                  <div className="titles no-margin">
                    <h4>Address</h4>
                  </div>
                  <div className="info-panel">
                    <address>
                      <br />
                      <strong>Address: </strong> {details && details.address}
                      <br />
                      <strong>City: </strong>
                      {details && details.city}
                      <br />
                      <strong>Pincode: </strong>
                      {details && details.pincode}
                      <br />
                      <strong>Country: </strong>
                      {details && details.country}
                      <br />
                    </address>
                  </div>
                </aside>
                <aside className="panel-box">
                  <div className="titles no-margin">
                    <h4>Contact</h4>
                  </div>
                  <div className="info-panel">
                    <address>
                      <strong>Email:</strong>
                      <a href="mailto:#">{details && details.email}</a>
                      <br />

                      <strong>Phone:</strong>
                      <a href="mailto:#">{details && details.phone}</a>
                    </address>
                  </div>
                </aside>
              </div>
              {/* End Left Content */}
              {/* Right Content */}
              <div className="col-md-8" style={{ backgroundColor: "#0B0B0B" }}>
                <div
                  className="panel-box"
                  style={{ backgroundColor: "#0B0B0B" }}
                >
                  <div className="titles no-margin">
                    <h4 style={{ color: "#FDFDFD" }}>Contact Form</h4>
                  </div>
                  <div className="info-panel">
                    {/* Form Contact */}
                    <form className="form-theme" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <label style={{ color: "#FDFDFD" }}>
                            Your name *
                          </label>
                          <input
                            type="text"
                            required
                            defaultValue=""
                            maxLength={100}
                            className="form-control"
                            name="Name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          />
                        </div>
                        <div className="col-md-6">
                          <label style={{ color: "#FDFDFD" }}>
                            Your email address *
                          </label>
                          <input
                            type="email"
                            required="required"
                            defaultValue=""
                            maxLength={100}
                            className="form-control"
                            name="Email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label style={{ color: "#FDFDFD" }}>Subject *</label>
                          <input
                            type="text"
                            required="required"
                            defaultValue=""
                            maxLength={100}
                            className="form-control"
                            name="Subject"
                            id="subject"
                            style={{ borderColor: "black" }}
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label style={{ color: "#FDFDFD" }}>Comment *</label>
                          <textarea
                            maxLength={5000}
                            rows={10}
                            className="form-control"
                            name="message"
                            style={{ height: 138 }}
                            required="required"
                            defaultValue={""}
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="submit"
                            defaultValue="Send Message"
                            className="btn btn-lg btn-primary"
                          />
                        </div>
                      </div>
                    </form>
                    {/* End Form Contact */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="result" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right Content */}
            </div>
          </div>

          {/* End Newsletter */}
        </section>
      )}
    </>
  );
};

export default Contact;
