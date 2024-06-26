import React from 'react';

const NavBar = ({ cart }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light text-light bg-light border" aria-label="Offcanvas navbar large">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NovaBuzzer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex justify-content-between" href="/cart">
                    <p>Cart</p>
                    <sup>{cart && cart.total_items !== undefined ? cart.total_items : '...'}</sup>
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex mt-3 mt-lg-0" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
