import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'

const ServicesDetail = () => {
  return (
    <>
      <CustomBreadcrumb title="service single" subtitle="service single" />

      <Container>
        <div className="service-detail">
          <Row>
            <Col lg={4}>
              <div className="left">
                <ul className="left__menu">
                  <li className="left__item">
                    <Link to="">Alternate Energy</Link>
                  </li>
                  <li className="left__item">
                    <Link to="">Alternate Energy</Link>
                  </li>
                  <li className="left__item">
                    <Link to="">Alternate Energy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={8}>
              <div className="right">
                <img className="right__image" src="/images/img-1.jpg" alt="" />
                <div className="right__title">
                  <h3>Alternate Energy</h3>
                  <div className="download">
                    <Link to="">
                      <i class="ri-file-word-line"></i>
                      Download Doc
                    </Link>
                    <Link to="">
                      <i class="ri-file-pdf-2-line"></i>
                      Download PDF
                    </Link>
                  </div>
                </div>
                <div className="right__details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi iste accusamus voluptates, aliquid blanditiis ut.
                    Provident vitae ullam quibusdam quae libero dolores, ratione
                    vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                    iste accusamus voluptates, aliquid blanditiis ut. Provident
                    vitae ullam quibusdam quae libero dolores, ratione vel
                    cupiditate sunt amet? Sit, incidunt, laboriosam!
                  </p>
                  <ul>
                    <li>
                      <i class="ri-add-line"></i> Mollis Pharetra Euismod Tellus
                      Fermentum
                    </li>
                    <li>
                      <i class="ri-add-line"></i> Vulputate sem Pellentesque
                      Adipiscing
                    </li>
                    <li>
                      <i class="ri-add-line"></i> Cursus sit Tortor Ligula
                      Nullam
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi iste accusamus voluptates, aliquid blanditiis ut.
                    Provident vitae ullam quibusdam quae libero dolores, ratione
                    vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                    iste accusamus voluptates, aliquid blanditiis ut. Provident
                    vitae ullam quibusdam quae libero dolores, ratione vel
                    cupiditate sunt amet? Sit, incidunt, laboriosam!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ServicesDetail
