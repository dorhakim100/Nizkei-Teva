import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { Route } from '../../assets/routes/routes'

import { RootState } from '../../store/store'

import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

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
        <DropdownMenu options={routes} />
        <nav>
          <ul>
            {routes.map((route, index) => (
              <li key={index} onClick={() => navigateToPage(route.path)}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
