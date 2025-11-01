import { Language } from '../system/Languages'

export interface NewsItem {
  id: string
  title: Partial<Language>
  summary?: Partial<Language>
  imageUrl?: string
  linkUrl?: string
  publishedAt?: string
}
