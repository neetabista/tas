import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="footer__list">
            <Row>
              <Col md={4}>
                <div className="footer__logo--section">
                  <img
                    className="footer__logo"
                    src="/images/logo.png"
                    alt="logo"
                  />
                  <h5>Technical Associates Services Pvt. Ltd</h5>
                </div>
              </Col>

              <Col md={4}>
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
              </Col>

              <Col md={4}>
                <div className="footer__item">
                  <h6>Contact Us</h6>
                  <p className="address">
                    Aspen Marg, Maitighar, St. Xavier College Rd, Kathmandu,
                    Nepal – 44600
                  </p>
                  <p className="number">
                    <span>Tel:</span> 01-5339555
                  </p>
                  <p className="email">
                    <span>E-mail:</span>info@tas.com.np
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
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
