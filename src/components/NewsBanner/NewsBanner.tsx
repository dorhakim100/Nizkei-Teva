interface NewsBannerProps {
  message?: string
}

export function NewsBanner({ message }: NewsBannerProps) {
  return (
    <div className='news-banner'>
      <span className='news-banner__text'>
        {message || 'Welcome! Here is a basic news banner.'}
      </span>
    </div>
  )
}
