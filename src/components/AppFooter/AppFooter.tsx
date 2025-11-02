import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'
import { smoothScroll } from '../../services/util.service'

import { RootState } from '../../store/store'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PlaceIcon from '@mui/icons-material/Place'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'

import footerJson from '../../assets/jsons/footer/footer.json'

export function AppFooter() {
  const navigate = useNavigate()

  const prefs = useSelector(
    (storeState: RootState) => storeState.systemModule.prefs
  )

  const openLink = (link: string) => {
    window.open(link)
  }

  return (
    <footer
      className={`app-footer full ${prefs.isDarkMode ? 'dark-mode' : ''}`}
    ></footer>
  )
}
