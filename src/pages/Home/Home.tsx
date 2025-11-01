import { useSelector } from 'react-redux'

import { FadeCarousel } from '../../components/FadeCarousel/FadeCarousel'
import { CustomButton } from '../../components/CustomButton/CustomButton'

import { RootState } from '../../store/store'

import carouselJson from '../../assets/jsons/home/carousel.json'

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

export function Home() {
  console.log(carouselJson)
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  const button = {
    he: 'כפתור',
    en: 'button',
  }
  return (
    <div className='home-container'>
      <FadeCarousel slides={carouselJson.slides} />
      <CustomButton onClick={() => {}}>
        {button[prefs.language as keyof typeof button]}
      </CustomButton>
    </div>
  )
}
