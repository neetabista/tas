import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
                  <i class="ri-arrow-drop-down-line"></i>
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <Link to="">About TAS</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">our associations</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">sister concern</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to="">services</Link>
                </li>
                <li className="menu__item">
                  <Link to="">solution</Link>
                  <i class="ri-arrow-drop-down-line"></i>
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <Link to="">Hospitality Solutions</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">Industrial Solutions</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">Residential Solutions</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <Link to="">our products</Link>
                  <i class="ri-arrow-drop-down-line"></i>
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <Link to="">Thermax Boilers</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">Water Pumps</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">Compressed Air System</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">Fire Fighting System</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="">Oxygen & Nitrogen Generators</Link>
                    </li>
                  </ul>
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

            <div className="side-menu" onClick={handleShow}>
              <i class="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/images/logo.png" alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="header__menu">
            <ul className="menu__list">
              <li className="menu__item menu__link--acitve">
                <Link to="">home</Link>
              </li>
              <li className="menu__item">
                <Link to="">about us</Link>
                <i class="ri-arrow-drop-down-line"></i>
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to="">About TAS</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">our associations</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">sister concern</Link>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <Link to="">services</Link>
              </li>
              <li className="menu__item">
                <Link to="">solution</Link>
                <i class="ri-arrow-drop-down-line"></i>
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to="">Hospitality Solutions</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Industrial Solutions</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Residential Solutions</Link>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <Link to="">our products</Link>
                <i class="ri-arrow-drop-down-line"></i>
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to="">Thermax Boilers</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Water Pumps</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Compressed Air System</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Fire Fighting System</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Oxygen & Nitrogen Generators</Link>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <Link to="">contact us</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
