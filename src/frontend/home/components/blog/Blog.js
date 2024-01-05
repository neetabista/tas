import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../../../data/data'
import Button from '../../../../components/common/button/Button'

const Blog = () => {
  return (
    <div className="blog">
      <div
        className="blog__bg--image"
        style={{ backgroundImage: 'url("/images/map.png")' }}
      >
        <div className="wrapper">
          <h3>Thoughts & Experiments</h3>
          <div className="blog__list">
            {blogs.map((blog, index) => (
              <div className="blog__item" key={index}>
                <div className="blog__img">
                  <Link to="">
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    >
                      <div className="time">
                        <h4>{blog.day}</h4>
                        <h5>{blog.month}</h5>
                        <h5>{blog.year}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blog__title--section">
                  <p className="title-header">
                    By <Link to="">Frenify</Link> -In{' '}
                    <Link to="">Australia</Link>
                  </p>

                  <Link to={`/detail/${blog.id}`}>
                    <div className="blog__title">{blog.title}</div>
                  </Link>
                  <Link to="">
                    <Button btnData="read more" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
