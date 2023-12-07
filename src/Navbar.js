import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const Navbar = ({Toggle}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand d-none d-md-block" href="#">
          Dashborad
        </a>
        <a className="navbar-brand  d-block d-md-none" onClick={Toggle} >
          <i className='bi bi-justify'></i>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item border rounded">
              <a className="nav-link text-white" aria-current="page" href="#">
                <i className='bi bi-search'></i>Search
              </a>
            </li>
            <li className="nav-item mx-2 rounded border ">
              <a className="nav-link text-white" aria-current="page" href="#">
                Account
              </a>
            </li>
            <li className="nav-item border rounded">
              <a className="nav-link text-white" aria-current="page" href="#">
                Logout
              </a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
