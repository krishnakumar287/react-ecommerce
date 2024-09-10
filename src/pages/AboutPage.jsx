import React from 'react';
import { Footer, Navbar } from "../components";
import './AboutPage.css'; // Import the custom CSS file for AboutPage styling

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <h1 className="text-center mb-4">About Us</h1>
        <p className="lead text-center mb-4">
          Welcome to our store! We are passionate about providing high-quality products that cater to all your needs. Our mission is to deliver exceptional service and create a memorable shopping experience for every customer. Explore our diverse range of products and discover why we are the top choice for fashion, jewelry, and electronics.
        </p>

        <h2 className="text-center mb-4">Our Categories</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 category-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" />
              <div className="card-body text-center">
                <h5 className="card-title">Men's Clothing</h5>
                <p className="card-text">Stylish and comfortable apparel for men. Discover our latest collection of shirts, jackets, and more.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 category-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" />
              <div className="card-body text-center">
                <h5 className="card-title">Women's Clothing</h5>
                <p className="card-text">Explore our fashionable women's clothing range including dresses, tops, and accessories.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 category-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" />
              <div className="card-body text-center">
                <h5 className="card-title">Jewelry</h5>
                <p className="card-text">Browse our exquisite jewelry collection featuring rings, necklaces, and more to add a touch of elegance to any outfit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 category-card">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" />
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
                <p className="card-text">Find the latest in technology and gadgets, from smartphones to smart home devices, all in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
