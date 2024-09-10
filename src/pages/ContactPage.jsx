import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-sm-10">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body p-4">
                <h1 className="text-center text-dark mb-4">Contact Us</h1>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="Name" className="text-dark">Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-pill"
                      id="Name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="Email" className="text-dark">Email</label>
                    <input
                      type="email"
                      className="form-control border-dark rounded-pill"
                      id="Email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="Message" className="text-dark">Message</label>
                    <textarea
                      rows={5}
                      className="form-control border-dark rounded-pill"
                      id="Message"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-danger rounded-pill px-4 py-2"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
