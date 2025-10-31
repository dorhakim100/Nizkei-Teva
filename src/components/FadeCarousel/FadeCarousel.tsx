import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { PlayButton } from '../PlayButton/PlayButton'

import { RootState } from '../../store/store'
import { Slide } from '../../types/Carousel/Slide'
import { Language } from '../../types/system/Languages'

import agricultureSticker from '../../../public/imgs/agriculture-sticker.png'

export function FadeCarousel({ slides }: { slides: Slide[] }) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

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
        // pagination={true}
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
            <div className='text-container'>
              <div className='hs-container'>
                <img src={agricultureSticker} className='agriculture-sticker' />
                <h2>{slide.h2[prefs.language as keyof Language]}</h2>
                {slide.h3 && (
                  <h3>{slide.h3[prefs.language as keyof Language]}</h3>
                )}
                {slide.h4 && (
                  <h4 className='bold'>
                    {slide.h4[prefs.language as keyof Language]}
                  </h4>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='pagination-container'>
        <PlayButton isPlaying={isPlaying} onClick={togglePlaying} />
        {slides.map((_, index) => {
          return (
            <div
              key={`${index}-pagination-bullet`}
              onClick={() => {
                swiperRef.current?.swiper.slideTo(index)
                setActiveIndex(index)
                if (isPlaying) {
                  swiperRef.current?.swiper.autoplay.start()
                }
              }}
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
