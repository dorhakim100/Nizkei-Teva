import { Language } from '../system/Languages'
import { SlideButton } from './SlideButton'

export interface Slide {
  image: string
  title: Language
  button: SlideButton
}
