import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

import quickServicesJson from '../../assets/jsons/floatings/quick-services.json'
import { Language } from '../../types/system/Languages'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Divider } from '@mui/material'

export function QuickServices() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  return (
    <section className={`quick-services-container ${prefs.language}`}>
      <div className='title-container pointer'>
        <h4>{quickServicesJson.title[prefs.language as keyof Language]}</h4>
        <KeyboardArrowLeftIcon />
      </div>
      <Divider className='divider' />
      <div className='quick-services-list'>
        {quickServicesJson.items.map((item) => (
          <div
            className='quick-service-item-container'
            key={item.title[prefs.language as keyof Language]}
          >
            <div className='quick-service-item pointer'>
              <img
                src={item.icon}
                alt={item.title[prefs.language as keyof Language]}
              />
              <h5>{item.title[prefs.language as keyof Language]}</h5>
            </div>
            <Divider className='divider' />
          </div>
        ))}
      </div>
    </section>
  )
}
