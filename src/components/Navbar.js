import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand mb-0 h1">
                <i className="fas fa-book-open"></i>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Word of the day!</Link>
                    <Link className="nav-item nav-link" to="/Vocab">Definitions</Link>
                    <a href="https://developer.wordnik.com/" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">API</a>
                    <Link className="nav-item nav-link" to="/About">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;