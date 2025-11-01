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
      // onClick={() => onClick?.(item)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
    >
      {item.imageUrl && (
        <div className='media'>
          <img
            src={item.imageUrl}
            alt={typeof title === 'string' ? title : ''}
          />
        </div>
      )}
      <div className='content'>
        {item.publishedAt && (
          <time className='date' dateTime={item.publishedAt}>
            {item.publishedAt}
          </time>
        )}
        <h4 className='title'>{title}</h4>
        {summary && <p className='summary'>{summary}</p>}
      </div>
    </article>
  )
}
