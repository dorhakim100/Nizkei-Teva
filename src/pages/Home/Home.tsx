import { useSelector } from 'react-redux'

import { FadeCarousel } from '../../components/FadeCarousel/FadeCarousel'
import { CustomButton } from '../../components/CustomButton/CustomButton'

import { RootState } from '../../store/store'

import carouselJson from '../../assets/jsons/home/carousel.json'

export function Home() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  return (
    <div className='home-container'>
      <FadeCarousel slides={carouselJson.slides} />
    </div>
  )
}
