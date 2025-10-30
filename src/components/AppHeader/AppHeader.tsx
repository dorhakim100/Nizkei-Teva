import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { Route } from '../../assets/routes/routes'

import { RootState } from '../../store/store'

// import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

import logoImg from '../../../public/logo.png'
import darkMode from '../../../public/icons/dark-mode.svg'
import search from '../../../public/icons/search.svg'
import profile from '../../../public/icons/profile.svg'

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

  const navigateToPage = (route: string) => {
    navigate(route)
  }

  return (
    <>
      <header
        className={`header ${isHeader ? 'visable' : ''} ${
          prefs.isDarkMode ? 'dark-mode' : ''
        }`}
      >
        <img src={logoImg} alt='logo' className='logo-img' />

        <div className='navigation-container'>
          <nav>
            <ul>
              {routes.map((route, index) => (
                <li key={index} onClick={() => navigateToPage(route.path)}>
                  <Link className='bold' to={route.path}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='settings-container'>
            <img src={darkMode} alt='dark mode' className='icon' />
            <img src={search} alt='search' className='icon' />
          </div>
        </div>

        <div className='profile-container'>
          <img src={profile} alt='profile' className='icon profile-icon' />
          <span className='bold'>כניסה לאזור האישי</span>
        </div>
      </header>
    </>
  )
}
