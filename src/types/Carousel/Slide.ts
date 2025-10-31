import { Language } from '../system/Languages'
import { SlideButton } from './SlideButton'

export interface Slide {
  image: string
  h2: Language
  h3?: Language
  h4?: Language
  button: SlideButton
}
