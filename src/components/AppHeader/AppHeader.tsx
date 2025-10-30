import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { Route } from '../../assets/routes/routes'

import { RootState } from '../../store/store'

// import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

import logoImg from '../../../public/logo.png'
import darkMode from '../../../public/icons/dark-mode.svg'
import search from '../../../public/icons/search.svg'
import profile from '../../../public/icons/profile.svg'
import { Language } from '../../types/system/Languages'
import { LanguagePicker } from '../LanguagePicker/LanguagePicker'
import { getLanguageName, smoothScroll } from '../../services/util.service'

interface AppHeaderProps {
  routes: Route[]
}

export function AppHeader({ routes }: AppHeaderProps) {
  const navigate = useNavigate()

  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  const isHeader = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.isHeader
  )

  const navigateWithScroll = (path: string) => {
    smoothScroll()
    navigate(path)
  }

  return (
    <>
      <header
        className={`header ${isHeader ? 'visable' : ''} ${
          prefs.isDarkMode ? 'dark-mode' : ''
        }`}
      >
        <img
          src={logoImg}
          alt='logo'
          className='logo-img pointer'
          onClick={() => navigateWithScroll('/')}
        />

        <div className='navigation-container'>
          <nav>
            <ul>
              {routes
                .filter((route) => route.path !== '/')
                .map((route, index) => (
                  <li
                    key={index}
                    onClick={() => navigateWithScroll(route.path)}
                    className='underline-animation'
                  >
                    <Link className='bold' to={route.path}>
                      {route.title[prefs.language as keyof Language]}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className='settings-container'>
            <LanguagePicker>
              {() => {
                return (
                  <div className='language-picker-container bold'>
                    {getLanguageName(prefs.language)}
                  </div>
                )
              }}
            </LanguagePicker>
            <img src={search} alt='search' className='icon' />
            <img src={darkMode} alt='dark mode' className='icon' />
          </div>
        </div>

        <div className='profile-container pointer'>
          <img src={profile} alt='profile' className='icon profile-icon' />
          <span className='bold'>כניסה לאזור האישי</span>
        </div>
      </header>
    </>
  )
}
