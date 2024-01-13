import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="footer__content">
            <Row>
              <Col lg={4}>
                <div className="footer__logo-section">
                  <Link to="/">
                    <img
                      className="footer__logo"
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, nostrum et quisquam quae, sapiente ab nobis
                    laboriosam libero neque voluptate, labore accusamus
                    accusantium necessitatibus exercitationem ipsum laborum ut
                    officiis corrupti.
                  </p>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={4}>
                    <div className="footer__links">
                      <h4>Quick Links</h4>
                      <ul>
                        <li className="item">
                          <Link to="">faqs</Link>
                        </li>
                        <li className="item">
                          <Link to="">blog & news</Link>
                        </li>
                        <li className="item">
                          <Link to="">company policy</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="footer__product">
                      <h4>Our Product</h4>
                      <ul>
                        <li className="item">
                          <Link to="">Thermax Boilers</Link>
                        </li>
                        <li className="item">
                          <Link to="">Water Pumps</Link>
                        </li>
                        <li className="item">
                          <Link to="">Compressed Air System</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="footer__contact">
                      <h4>Contact Us</h4>
                      <ul className="contact-info">
                        <li className="info address">
                          <i class="ri-map-pin-2-line"></i>
                          <p>
                            Aspen Marg, Maitighar, St. Xavier College Rd,
                            Kathmandu, Nepal – 44600
                          </p>
                        </li>
                        <li className="info number">
                          <i class="ri-phone-line"></i>
                          <p>01-5339555</p>
                        </li>
                        <li className="info email">
                          <i class="ri-mail-line"></i>
                          <p>info@tas.com.np</p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="footer__bottom">
          <Container>
            <div className="bottom-list">
              <div className="bottom-item">Copyright &copy; 2023 TAS</div>
              <div className="bottom-item">Technical Partner: Encode Tree</div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Footer
