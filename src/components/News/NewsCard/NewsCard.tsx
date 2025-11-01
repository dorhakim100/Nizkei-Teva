import { NewsItem } from '../../../types/News/NewsItem'
import { Language } from '../../../types/system/Languages'

type NewsCardProps = {
  item: NewsItem
  language: keyof Language
  onClick?: (item: NewsItem) => void
}

export function NewsCard({ item, language, onClick }: NewsCardProps) {
  const title = item.title[language] || ''
  const summary = item.summary?.[language] || ''

  return (
    <article
      className='news-card'
      onClick={() => onClick?.(item)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
    >
      {item.imageUrl && (
        <div className='news-card__media'>
          <img
            src={item.imageUrl}
            alt={typeof title === 'string' ? title : ''}
          />
        </div>
      )}
      <div className='news-card__content'>
        <h3 className='news-card__title'>{title}</h3>
        {summary && <p className='news-card__summary'>{summary}</p>}
        {item.publishedAt && (
          <time className='news-card__date' dateTime={item.publishedAt}>
            {item.publishedAt}
          </time>
        )}
      </div>
    </article>
  )
}
