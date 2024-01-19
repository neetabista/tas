import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { serverCard } from '../../data/data'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'
const Services = () => {
  return (
    <>
      <CustomBreadcrumb title="services" subtitle="services" />
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
                    <h4 className='services__title'>{card.title}</h4>
                    <p className='services__samary'>{card.description}</p>
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
