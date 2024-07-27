'use client'

import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <div className="container text-center">
        <div className="row">
            <div className="col"><Card></Card></div>
            <div className="col"><Card></Card></div>
            <div className="col"><Card></Card></div>
        </div>
    </div>
  )
}

export default CardContainer