import React from 'react'

const Carousel = ({ header, text, button, heroImg }) => {
  return (
    <div class="container col-xxl-8 ht-100 px-4 py-5 my-5">
    <div class="row flex-lg-row-reverse align-items-center g-1 py-1">
      <div class="col-10 col-sm-8 col-lg-6">
        <img className='' src={heroImg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{header}</h1>
        <p className="lead">{text}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">{button}</button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Carousel
