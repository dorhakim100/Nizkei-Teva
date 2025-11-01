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
      {item.media && (
        <div className='media'>
          {item.media.includes('/embed/') ? (
            <iframe src={item.media} title={title} />
          ) : (
            <img src={item.media} alt={title} />
          )}
        </div>
      )}
      <div className='content'>
        {item.publishedAt && (
          <time
            className='date bold'
            dateTime={new Date(item.publishedAt).toLocaleDateString(language)}
          >
            {new Date(item.publishedAt).toLocaleDateString(language)}
          </time>
        )}
        <h4 className='title'>{title}</h4>
        {summary && (
          <div className='summary-container'>
            <p className='summary'>{summary}</p>
          </div>
        )}
        <a
          className='read-more underline-animation bold pointer'
          href={item.linkUrl}
        >
          {language === 'he' ? 'קרא עוד' : 'Read more'}
        </a>
      </div>
    </article>
  )
}
