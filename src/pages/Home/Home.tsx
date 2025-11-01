import { useSelector } from 'react-redux'

import { FadeCarousel } from '../../components/FadeCarousel/FadeCarousel'

import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'

import carouselJson from '../../assets/jsons/home/carousel.json'
import galleryJson from '../../assets/jsons/home/gallery.json'
import { GalleryImgs } from './GalleryImgs'
import { AgricultureGallery } from './AgricultureGallery'

export function Home() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  return (
    <div className='home-container'>
      <FadeCarousel slides={carouselJson.slides} />
      <h3 className='gallery-title'>
        {galleryJson.title[prefs.language as keyof Language]}
      </h3>
      <GalleryImgs imgs={galleryJson.imgs} />
      <AgricultureGallery />
    </div>
  )
}
