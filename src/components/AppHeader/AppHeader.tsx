import { useMemo, useState } from 'react'
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
import { useDimensions } from '../../hooks/useDimensions'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

import headerJson from '../../assets/jsons/header.json'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import { DropdownOption } from '../../types/DropdownOption'
interface AppHeaderProps {
  routes: Route[]
}

const root = document.documentElement
const NARROW_WIDTH = +getComputedStyle(root)
  .getPropertyValue('--narrow-width')
  .replace('px', '')

export function AppHeader({ routes }: AppHeaderProps) {
  const navigate = useNavigate()

  const dimensions = useDimensions()

  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  const isHeader = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.isHeader
  )

  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const isNarrow = useMemo(() => {
    return dimensions.width < NARROW_WIDTH
  }, [dimensions.width])

  const navigateWithScroll = (path: string) => {
    smoothScroll()
    navigate(path)
  }

  const openSearch = () => {
    setIsSearchOpen(true)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
  }

  const renderRoutes = () => {
    const routesToRender = routes.filter((route) => route.path !== '/')

    if (isNarrow) {
      const options: DropdownOption[] = routesToRender.map((route) => ({
        title: route.title[prefs.language as keyof Language],
        onClick: () => navigateWithScroll(route.path),
      }))

      return <DropdownMenu options={options} />
    } else {
      return (
        <nav>
          <ul>
            {routesToRender.map((route, index) => (
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
      )
    }
  }

  const renderProfileButton = () => {
    return (
      <div className='profile-container pointer'>
        <img src={profile} alt='profile' className='icon profile-icon' />
        <span className='bold'>
          {headerJson.profile[prefs.language as keyof Language]}
        </span>
      </div>
    )
  }

  return (
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
        {renderRoutes()}
        <div className='settings-container'>
          {!isNarrow && (
            <LanguagePicker>
              {() => {
                return (
                  <div className='language-picker-container bold'>
                    {getLanguageName(prefs.language)}
                  </div>
                )
              }}
            </LanguagePicker>
          )}
          <img
            src={search}
            alt='search'
            className='icon'
            onClick={openSearch}
          />
          <img src={darkMode} alt='dark mode' className='icon' />
        </div>
      </div>

      {!isNarrow && renderProfileButton()}
      <div className={`input-container ${isSearchOpen ? 'open' : ''}`}>
        <input
          type='text'
          placeholder={
            headerJson.searchPlaceholder[prefs.language as keyof Language]
          }
          className='borderless-input'
        />
        <SearchIcon className='icon search-icon pointer' />
        <CloseIcon onClick={closeSearch} className='icon close-icon pointer' />
      </div>
    </header>
  )
}
