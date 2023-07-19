import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}  >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.titleText}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>

            </ul>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} aria-checked type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn navbar-toggler-icon p-3 mx-auto my-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>


  )
}

Navbar.propTypes = {
  titleText: PropTypes.string,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  titleText: 'Set title here',
  aboutText: 'Set abouttext here'
}
