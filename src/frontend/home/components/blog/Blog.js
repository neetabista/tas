import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../../../data/data'
import Button from '../../../../components/common/button/CustomButton'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

const Blog = () => {
  return (
    <div className="blog">
      <div
        className="blog__bg--image"
        style={{ backgroundImage: 'url("/images/map.png")' }}
      >
        <Container>
          <h3 className="title">Thoughts & Experiments</h3>

          <div className="blog__list">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {blogs.map((blog, index) => (
                <SwiperSlide>
                  <div className="blog__card">
                    <Link to="">
                      <div
                        className="blog__img"
                        style={{ backgroundImage: `url(${blog.image})` }}
                      >
                        <div className="time">
                          <h4>{blog.day}</h4>
                          <h5>{blog.month}</h5>
                          <h5>{blog.year}</h5>
                        </div>
                      </div>
                    </Link>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Blog
