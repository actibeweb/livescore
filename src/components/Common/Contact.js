import React from 'react'

const Contact = () => {
  return (
    <section className="content-info">
  <div className="container">
        <h2 style={{color:"white",fontSize:"3rem"}} >Contact Us</h2>
    <div className="row paddings-mini">
      {/* Left Content */}
      <div className="col-md-4">
        <aside className="panel-box">
          <div className="titles no-margin">
            <h4>The Office</h4>
          </div>
          <div className="info-panel">
            <address>
              <strong>Sports Cup, Inc.</strong>
              <br />
              <i className="fa fa-map-marker" />
              <strong>Address: </strong> fa795 Folsom Ave, Suite 600
              <br />
              <i className="fa fa-plane" />
              <strong>City: </strong>San Francisco, CA 94107
              <br />
              <i className="fa fa-phone" /> <abbr title="Phone">P:</abbr> (123)
              456-7890
            </address>
          </div>
        </aside>
        <aside className="panel-box">
          <div className="titles no-margin">
            <h4>Emails Contact</h4>
          </div>
          <div className="info-panel">
            <address>
              <i className="fa fa-envelope" />
              <strong>Email:</strong>
              <a href="mailto:#"> sales@sportscup.com</a>
              <br />
              <i className="fa fa-envelope" />
              <strong>Email:</strong>
              <a href="mailto:#"> support@sportscup.com</a>
            </address>
          </div>
        </aside>
      </div>
      {/* End Left Content */}
      {/* Right Content */}
      <div className="col-md-8">
        <div className="panel-box">
          <div className="titles no-margin">
            <h4>Contact Form</h4>
          </div>
          <div className="info-panel">
            {/* Form Contact */}
            <form
              className="form-theme"
              action="http://html.iwthemes.com/sportscup/run/php/send-mail.php"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Your name *</label>
                  <input
                    type="text"
                    required="required"
                    defaultValue=""
                    maxLength={100}
                    className="form-control"
                    name="Name"
                    id="name"
                  />
                </div>
                <div className="col-md-6">
                  <label>Your email address *</label>
                  <input
                    type="email"
                    required="required"
                    defaultValue=""
                    maxLength={100}
                    className="form-control"
                    name="Email"
                    id="email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Subject *</label>
                  <input
                    type="text"
                    required="required"
                    defaultValue=""
                    maxLength={100}
                    className="form-control"
                    name="Email"
                    id="email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Comment *</label>
                  <textarea
                    maxLength={5000}
                    rows={10}
                    className="form-control"
                    name="message"
                    style={{ height: 138 }}
                    required="required"
                    defaultValue={""}
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

  )
}

export default Contact