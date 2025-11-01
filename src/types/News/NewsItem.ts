import { Language } from '../system/Languages'

export interface NewsItem {
  id: string
  title: Partial<Language>
  summary?: Partial<Language>
  media?: string
  linkUrl?: string
  publishedAt?: number
}
