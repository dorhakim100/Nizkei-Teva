import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

import doobleFooterJson from '../../assets/jsons/footer/dooble-footer.json'
import { Language } from '../../types/system/Languages'

export function DoobleFooter() {
  const prefs = useSelector(
    (storeState: RootState) => storeState.systemModule.prefs
  )

  return (
    <div className={`dooble-footer ${prefs.language}`}>
      <div className='dooble-items-container'>
        {doobleFooterJson.items.map((item, idx) => {
          return idx !== doobleFooterJson.items.length - 1 ? (
            <div
              className='dooble-item underline-animation pointer'
              key={item.title[prefs.language as keyof Language]}
              onClick={() => {
                if (item.link) window.open(item.link, '_blank')
              }}
            >
              <h5>{item.title[prefs.language as keyof Language]}</h5>
            </div>
          ) : null
        })}
      </div>
      <div className='dooble-links-container'>
        <div
          className='dooble-item underline-animation pointer'
          onClick={() => window.open('https://www.dooble.co.il/', '_blank')}
        >
          <h5>dooble</h5>
        </div>
      </div>
    </div>
  )
}
