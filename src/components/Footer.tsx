import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/Contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
      <li className="nav-item"><a href="/About" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="/Resources" className="nav-link px-2 text-body-secondary">Resources</a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2024 Roshan M.</p>
  </footer>
    </div>
  )
}

export default Footer