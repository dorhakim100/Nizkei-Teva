import { useSelector } from 'react-redux'

import { Language } from '../../types/system/Languages'
import { RootState } from '../../store/store'

interface Img {
  title: Language
  img: string
}

export function GalleryImgs({ imgs }: { imgs: Img[] }) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  return (
    <div className='gallery-imgs-container'>
      {imgs.map((img, index) => (
        <div key={`${index}-gallery-img`}>
          <img src={img.img} />
        </div>
      ))}
    </div>
  )
}
