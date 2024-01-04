import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          <div className="footer__list">
            <div className="footer__logo">
              <img src="/images/logo.png" alt="logo" />
              <h5>Technical Associates Services Pvt. Ltd</h5>
            </div>
            <div className="footer__item">
              <h6>Quick Links</h6>
              <ul className="footer__menu">
                <li className="menu__item">
                  <Link to="">Home</Link>
                </li>
                <li className="menu__item">
                  <Link to="">about us</Link>
                </li>
                <li className="menu__item">
                  <Link to="">our services</Link>
                </li>
                <li className="menu__item">
                  <Link to="">contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h6>Contact Us</h6>
              <p className="address">
                Aspen Marg, Maitighar, St. Xavier College Rd, Kathmandu, Nepal –
                44600
              </p>
              <p className="number">
                <span>Tel:</span> 01-5339555
              </p>
              <p className="email">
                <span>E-mail:</span>info@tas.com.np
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="wrapper">
            <div className="bottom-list">
              <div className="bottom-item">Copyright © 2023 TAS</div>
              <div className="bottom-item">Technical Partner: Encode Tree</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
