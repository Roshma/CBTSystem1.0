'use client'

import React from 'react'
import "../app/globals.css"


const Hero = () => {
  return (
    <div className='herodev'>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-3 py-1">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={`/HeroCyberSec1.jpg`} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <p className="lead">This website is created as the final assignment of </p>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Diploma in Cloud Computing and ERP</h1>
        <p className="lead">The website contains client and server components.   On front-end it has 4 pages, namely, ‘Home’, ‘Contact’, ‘About’ and 'Resources'.  All four pages have different routes.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        

        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero