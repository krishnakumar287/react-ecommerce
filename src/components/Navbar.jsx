import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; // Custom CSS

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 sticky-top shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-3 text-danger" to="/">
                    ReactCommerce
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-danger rounded-pill m-2">
                            <i className="fa fa-sign-in-alt me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-danger rounded-pill m-2">
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-danger rounded-pill m-2">
                            <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
