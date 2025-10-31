import { useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { PlayButton } from '../PlayButton/PlayButton'

const slides = [
  {
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
    title: 'Slide 1',
    description: 'This is the first slide',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-2.jpg',
    title: 'Slide 2',
    description: 'This is the second slide',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-3.jpg',
    title: 'Slide 3',
    description: 'This is the third slide',
  },
  {
    image: 'https://swiperjs.com/demos/images/nature-4.jpg',
    title: 'Slide 4',
    description: 'This is the fourth slide',
  },
]

export function FadeCarousel() {
  const swiperRef = useRef<SwiperRef>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlaying = () => {
    if (isPlaying) {
      swiperRef.current?.swiper.autoplay.stop()
    } else {
      swiperRef.current?.swiper.autoplay.start()
    }
    setIsPlaying((prevState) => !prevState)
  }

  return (
    <div className='fade-carousel-container'>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = { swiper })}
        spaceBetween={30}
        effect={'fade'}
        pagination={false}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className='mySwiper'
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex)
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='pagination-container'>
        <PlayButton isPlaying={isPlaying} onClick={togglePlaying} />
        {slides.map((_, index) => {
          return (
            <div
              key={`${index}-pagination-bullet`}
              onClick={() => swiperRef.current?.swiper.slideTo(index)}
              className={`swiper-pagination-bullet ${
                index === activeIndex ? 'swiper-pagination-bullet-active' : ''
              }`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
