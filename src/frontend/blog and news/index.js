import React from 'react'
import BlogCard from '../../components/common/BlogCard'
import { Container, Row, Col } from 'react-bootstrap'
import { blogs } from '../../data/data'
import { Link } from 'react-router-dom'

const BlogAndNews = () => {
  return (
    <>
      <Container>
        <div className="title__holder">
          <div className="title__holder--title">
            <h3>blogs</h3>
            <div className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="">Home</Link>
                </li>
                <li className="separator">
                  <span></span>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="">blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="blogs">
          <Row>
            {blogs.map((blog, index) => (
              <Col lg={4}>
                <BlogCard data={blog} index={index} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default BlogAndNews
