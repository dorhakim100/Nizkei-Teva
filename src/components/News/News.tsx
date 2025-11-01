import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'
import { NewsItem } from '../../types/News/NewsItem'

import { NewsCard } from './NewsCard/NewsCard'
import { CustomButton, CustomButtonProps } from '../CustomButton/CustomButton'

type NewsProps = {
  title?: string
  items: NewsItem[]
  onItemClick?: (item: NewsItem) => void
  button: CustomButtonProps & { text: Language; link: string }
}

export function News({ title, button, items, onItemClick }: NewsProps) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  return (
    <section className={`news-container ${prefs.language}`}>
      <h3 className='news-title'>{title}</h3>

      <CustomButton
        onClick={() => {
          window.open(button.link, '_blank')
        }}
        color={button.color}
      >
        {button.text[prefs.language as keyof Language]}
      </CustomButton>
      <div className='news-list'>
        {items.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            language={prefs.language as keyof Language}
            onClick={onItemClick}
          />
        ))}
      </div>
    </section>
  )
}
