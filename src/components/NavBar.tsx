'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
    <Image src={'/logo.jpg'} alt={'logo'} width={'40'} height={'40'}></Image>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        <Link className="nav-link" href="/Contact">Contact </Link>
        <Link className="nav-link" href="/About">About</Link>
        <Link className='nav-link' href="/Resources">Resources</Link>

      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar