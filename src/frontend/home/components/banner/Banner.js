import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, EffectFade } from 'swiper/modules'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__image">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/banner-1.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/banner-2.webp" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Banner
