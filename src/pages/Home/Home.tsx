import { FadeCarousel } from '../../components/FadeCarousel/FadeCarousel'

import carouselJson from '../../assets/jsons/home/carousel.json'

export function Home() {
  console.log(carouselJson)
  return (
    <div className='home-container'>
      <FadeCarousel slides={carouselJson.slides} />
    </div>
  )
}
