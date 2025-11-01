import { useSelector } from 'react-redux'

import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'

import agricultureGalleryJson from '../../assets/jsons/home/agriculture-gallery.json'
import { CustomButton } from '../../components/CustomButton/CustomButton'

export function AgricultureGallery() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  return (
    <div className='agriculture-gallery-container'>
      <div className='content-container'>
        <div className='text-container'>
          <h3>
            {agricultureGalleryJson.title[prefs.language as keyof Language]}
          </h3>
          <p>
            {
              agricultureGalleryJson.description[
                prefs.language as keyof Language
              ]
            }
          </p>
          <CustomButton
            onClick={() => {
              window.open(agricultureGalleryJson.button.link, '_blank')
            }}
            color={agricultureGalleryJson.button.color}
          >
            {
              agricultureGalleryJson.button.text[
                prefs.language as keyof Language
              ]
            }
          </CustomButton>
        </div>

        <div className='imgs-container'>
          {agricultureGalleryJson.imgs.map((img, index) => (
            <div key={`${index}-img`} className='img-container'>
              <img
                src={img.img}
                alt={img.text[prefs.language as keyof Language]}
              />
              <div className='text-container'>
                <h4>{img.text[prefs.language as keyof Language]}</h4>
              </div>
            </div>
          ))}
        </div>
        <img
          src={agricultureGalleryJson.paleLogo}
          alt='pale-logo'
          className='pale-logo'
        />
      </div>
      <img
        src={agricultureGalleryJson.backgroundImg}
        alt='background img'
        className='background-img'
      />
    </div>
  )
}
