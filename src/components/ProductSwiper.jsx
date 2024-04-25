import React from "react";
import Slider from "react-slick";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";  

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSwiper() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  // dummy data
  const demoArray = [1, 2, 3, 4, 5, 6]


  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...settings}>
          {demoArray.map((item) => (
            <div className="col">
              <div className="card mx-2 h-100">
                <img src="https://placehold.co/600x400" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer d-flex justify-content-between container w-100" >
                  <button className="btn btn-secondary">Add to Cart</button>
                  <ShoppingCartIcon style={{ width: "25px" }} />
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSwiper;
