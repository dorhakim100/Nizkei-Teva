import { useSelector } from 'react-redux'

import { Language } from '../../types/system/Languages'
import { RootState } from '../../store/store'
import { get0NumberString } from '../../services/util.service'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

interface Img {
  title: Language
  img: string
}

export function GalleryImgs({ imgs }: { imgs: Img[] }) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  const renderArrow = () => {
    if (prefs.language === 'en') {
      return <KeyboardArrowRightIcon />
    }
    return <KeyboardArrowLeftIcon />
  }
  return (
    <div className='gallery-imgs-container'>
      {imgs.map((img, index) => (
        <div key={`${index}-gallery-img`} className='img-container'>
          <div className={`text-container ${prefs.language}`}>
            <h3>{get0NumberString(index + 1)}</h3>
            <h4 className='pointer'>
              {img.title[prefs.language as keyof Language]}
              <span>{renderArrow()}</span>
            </h4>
          </div>
          <img src={img.img} />
        </div>
      ))}
    </div>
  )
}
