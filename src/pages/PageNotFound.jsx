import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            <i className="fas fa-arrow-left"></i> Go Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
