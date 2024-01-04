import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="header__logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="header__menu">
            <ul className="menu__list">
              <li className="menu__item menu__link--acitve">
                <Link to="">home</Link>
              </li>
              <li className="menu__item">
                <Link to="">about us</Link>
              </li>
              <li className="menu__item">
                <Link to="">services</Link>
              </li>
              <li className="menu__item">
                <Link to="">solution</Link>
              </li>
              <li className="menu__item">
                <Link to="">our products</Link>
              </li>
              <li className="menu__item">
                <Link to="">contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
