'use client'

import React from 'react'

const Contact = () => {
  return (
    <div>

        <div className="col-xl-6">
         
          <div className="row g-4">
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">First name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Last name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
          </div>
          <button type="button" className="btn btn-dark">Send Message</button>
        </div>
      </div>

  )
}

export default Contact