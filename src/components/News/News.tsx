import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'
import { NewsItem } from '../../types/News/NewsItem'

import { NewsCard } from './NewsCard/NewsCard'

type NewsProps = {
  title?: string
  items: NewsItem[]
  onItemClick?: (item: NewsItem) => void
}

export function News({ title, items, onItemClick }: NewsProps) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  return (
    <section className={`news-container ${prefs.language}`}>
      {title && <h2 className='news-title'>{title}</h2>}
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
