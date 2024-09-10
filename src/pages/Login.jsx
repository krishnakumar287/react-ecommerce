import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body p-4">
                <h1 className="text-center text-dark mb-4">Login</h1>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="text-dark">Email address</label>
                    <input
                      type="email"
                      className="form-control border-dark rounded-pill"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="text-dark">Password</label>
                    <input
                      type="password"
                      className="form-control border-dark rounded-pill"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <p>
                      New Here?{" "}
                      <Link to="/register" className="text-decoration-underline text-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-danger rounded-pill px-4 py-2"
                      type="submit"
                    >
                      Login
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

export default Login;
