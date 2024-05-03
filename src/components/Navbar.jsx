import React from 'react'
import DynamicCartIcon from './ind/DynamicCartIcon'

const Navbar = ({ cart }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">NovaBuzzer</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-5">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li> */}
                {/* <li className="nav-link"><a href=""></a></li> */}
                <li className="nav-link"><a className='nav-link' href="">Shop</a></li>
                <li className="nav-link"><a className='nav-link' href="">Contact Us</a></li>
                <li className="nav-link"><a className='nav-link' href="">
                  <DynamicCartIcon cart={cart}/>
                </a>
                </li>
              </ul>
              {/* <form class="d-flex mt-3 mt-lg-0" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
