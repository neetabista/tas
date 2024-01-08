import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="toppanel">
          <div className="toppanel__left--panel">
            <div className="toppanel__info">
              <Link to="tel:977 1 5339555">+977 1 5339555</Link>
            </div>
            <div className="toppanel__info">
              <Link to="tel:07787744741">info@tas.com.np</Link>
            </div>
            <div className="toppanel__social--list">
              <ul className="social-icons">
                <li className="icon">
                  <Link to="">
                    <i class="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="icon">
                  <Link to="">
                    <i class="ri-twitter-line"></i>
                  </Link>
                </li>
                <li className="icon">
                  <Link to="">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            <div className="toll-free">
              <p className="number">
                <span>Toll Free: </span>
                1-800-987-6543
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
