import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { serverCard } from '../../data/data'
const Services = () => {
  return (
    <>
      <Container>
        <div className="title__holder">
          <div className="title__holder--title">
            <h3>services</h3>
            <div className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="">Home</Link>
                </li>
                <li className="separator">
                  <span></span>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="">services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="services">
          <Row>
            {serverCard.map((card, index) => (
              <Col lg={4}>
                <div className="services__card" key={index}>
                  <div className="image-overlay">
                    <img
                      className="services__image"
                      src={card.image}
                      alt="services"
                    />
                    <div className="overlay">
                      <Link to="/service-detail">
                        <i class="ri-links-fill"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="services__content">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <Link to="">
                      <div className="read-btn">Read More</div>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Services
