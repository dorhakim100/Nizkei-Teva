// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'

import Divider from '@mui/material/Divider'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import PlaceIcon from '@mui/icons-material/Place'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'

import { CustomButton } from '../CustomButton/CustomButton'

import footerJson from '../../assets/jsons/footer/footer.json'

export function AppFooter() {
  const prefs = useSelector(
    (storeState: RootState) => storeState.systemModule.prefs
  )

  const openLink = (link: string) => {
    window.open(link, '_blank')
  }

  const socials = [
    {
      key: 'Facebook',
      icon: <FacebookIcon />,
      url: footerJson.socials[0].value,
    },
    { key: 'Twitter', icon: <TwitterIcon />, url: footerJson.socials[1].value },
    {
      key: 'Instagram',
      icon: <InstagramIcon />,
      url: footerJson.socials[2].value,
    },
    { key: 'YouTube', icon: <YouTubeIcon />, url: footerJson.socials[3].value },
    {
      key: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: footerJson.socials[4].value,
    },
    {
      key: 'Telegram',
      icon: <TelegramIcon />,
      url: footerJson.socials[5].value,
    },
  ]

  const lang = prefs.language as keyof Language
  const generalInfoTitle = lang === 'he' ? 'מידע כללי' : 'General information'

  return (
    <footer
      className={`app-footer full ${prefs.isDarkMode ? 'dark-mode' : ''}`}
    >
      <div className='footer-grid'>
        <div className='footer-logo'>
          <img src={'/logos/image 60.png'} alt='Kanat logo' />
        </div>

        <Divider
          orientation='vertical'
          flexItem
          className='divider desktop-only'
        />

        <div className='footer-cta'>
          <h3 className='footer-title'>{footerJson.title[lang]}</h3>
          <CustomButton
            color={footerJson.button.color}
            onClick={() => openLink(footerJson.button.link)}
          >
            {footerJson.button.text[lang]}
          </CustomButton>

          <div className='footer-contact'>
            <div className='contact-row'>
              <PlaceIcon />
              <span>{footerJson.address[lang]}</span>
            </div>
            <div className='contact-row'>
              <LocalPhoneIcon />
              <a
                className='underline-animation'
                onClick={() => openLink(`tel:${footerJson.links[0].value}`)}
              >
                {footerJson.links[0].value}
              </a>
            </div>
            <div className='contact-row'>
              <LocalPhoneIcon />
              <a
                className='underline-animation'
                onClick={() => openLink(`tel:${footerJson.links[1].value}`)}
              >
                {footerJson.links[1].value}
              </a>
            </div>
            <div className='contact-row'>
              <MailIcon />
              <a
                className='underline-animation'
                onClick={() => openLink(`mailto:${footerJson.links[2].value}`)}
              >
                {footerJson.links[2].value}
              </a>
            </div>
          </div>
        </div>
        <div className='footer-socials'>
          {socials.map((s) => (
            <div
              key={s.key}
              className='social-icon'
              onClick={() => openLink(s.url)}
              aria-label={s.key}
            >
              {s.icon}
            </div>
          ))}
        </div>

        <Divider
          orientation='vertical'
          flexItem
          className='divider desktop-only'
        />

        <div className='footer-links'>
          <h4 className='links-title'>{generalInfoTitle}</h4>
          <div className='links-grid desktop-only'>
            {footerJson.links.slice(3).map((link, idx) => (
              <a
                key={`footer-link-${idx}`}
                className='footer-link underline-animation'
                onClick={() => openLink(link.value)}
              >
                {link.title[lang]}
              </a>
            ))}
          </div>

          <div className='mobile-only accordion-container'>
            <Accordion
              disableGutters
              square
              elevation={0}
              className='footer-accordion'
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className='footer-accordion-summary'
              >
                {generalInfoTitle}
              </AccordionSummary>
              <AccordionDetails className='footer-accordion-details'>
                <div className='links-grid'>
                  {footerJson.links.slice(3).map((link, idx) => (
                    <a
                      key={`footer-link-mobile-${idx}`}
                      className='footer-link underline-animation'
                      onClick={() => openLink(link.value)}
                    >
                      {link.title[lang]}
                    </a>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </footer>
  )
}
