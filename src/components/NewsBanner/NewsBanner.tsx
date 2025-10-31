import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'

import newsBannerJson from '../../assets/jsons/news-banner.json'

export function NewsBanner() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  return (
    <div className={`news-banner ${prefs.language}`}>
      <span className='text'>
        {newsBannerJson.message[prefs.language as keyof Language]}
      </span>
    </div>
  )
}
