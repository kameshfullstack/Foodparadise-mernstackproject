import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>
            Feel free to get in touch with us through the following methods:
          </p>
          <ul>
            <li>Email:  Kameshsivakumar2623@gmail.com</li>
            <li>Phone: +91 8760091403</li>
            <li>Address:  Parkview Apartment velachery, Chennai, india</li>
          </ul>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

