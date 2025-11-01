import { useSelector } from 'react-redux'

import { FadeCarousel } from '../../components/FadeCarousel/FadeCarousel'

import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'

import carouselJson from '../../assets/jsons/home/carousel.json'
import galleryJson from '../../assets/jsons/home/gallery.json'
import { GalleryImgs } from './GalleryImgs'
import { AgricultureGallery } from './AgricultureGallery'
import { News } from '../../components/News/News'
import type { NewsItem } from '../../types/News/NewsItem'

const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: { en: 'Farmers Market Opens', he: 'שוק האיכרים נפתח' },
    summary: {
      en: 'Seasonal produce now available every Friday downtown.',
      he: 'תוצרת עונתית זמינה כעת בכל יום שישי במרכז העיר.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.',
    },
    imageUrl: '/imgs/image 49.png',
    linkUrl: 'https://example.com/news/1',
    publishedAt: '2025-10-28',
  },
  {
    id: 'n2',
    title: { en: 'New Irrigation Project', he: 'פרויקט השקיה חדש' },
    summary: {
      en: 'Improving water efficiency across regional farms.',
      he: 'שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.',
    },
    imageUrl: '/imgs/image 97.png',
    linkUrl: 'https://example.com/news/2',
    publishedAt: '2025-10-21',
  },
  {
    id: 'n3',
    title: { en: 'Organic Certification', he: 'תעודת אורגני' },
    summary: {
      en: 'Three new growers achieved organic certification.',
      he: 'שלושה מגדלים חדשים קיבלו תעודת אורגני.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.',
    },
    imageUrl: '/imgs/image 98.png',
    linkUrl: 'https://example.com/news/3',
    publishedAt: '2025-10-12',
  },
  {
    id: 'n4',
    title: { en: 'Organic Certification', he: 'תעודת אורגני' },
    summary: {
      en: 'Three new growers achieved organic certification.',
      he: 'שלושה מגדלים חדשים קיבלו תעודת אורגני.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.שיפור יעילות המים בחוות האזור.',
    },
    imageUrl: '/imgs/image 98.png',
    linkUrl: 'https://example.com/news/3',
    publishedAt: '2025-10-12',
  },
]

export function Home() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  return (
    <div className='home-container'>
      <FadeCarousel slides={carouselJson.slides} />
      <h3 className='gallery-title'>
        {galleryJson.title[prefs.language as keyof Language]}
      </h3>
      <GalleryImgs imgs={galleryJson.imgs} />
      <AgricultureGallery />
      <News
        title={prefs.language === 'he' ? 'חדשות' : 'Latest News'}
        items={newsItems}
        onItemClick={(item) => {
          if (item.linkUrl) window.open(item.linkUrl, '_blank')
        }}
      />
    </div>
  )
}
