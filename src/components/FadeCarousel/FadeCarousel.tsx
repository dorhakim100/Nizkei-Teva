import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function FadeCarousel() {
  return (
    <div className='fade-carousel-container'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
