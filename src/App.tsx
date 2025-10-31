import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router'

import { routes } from './assets/routes/routes'

import { smoothScroll } from './services/util.service'

import { AppHeader } from './components/AppHeader/AppHeader'
import { AppFooter } from './components/AppFooter/AppFooter.tsx'
import { RootState } from './store/store.ts'

import './App.css'
import { Prefs } from './types/system/Prefs.ts'
import { NewsBanner } from './components/NewsBanner/NewsBanner'

function App() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  const location = useLocation()

  useEffect(() => {
    _setBodyClass(prefs)
  }, [prefs])

  useEffect(() => {
    smoothScroll()
  }, [location.pathname])

  function _setBodyClass(prefs: Prefs) {
    if (prefs.isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }

    document.body.classList.remove('en')
    document.body.classList.remove('he')

    document.body.classList.add(prefs.language)
  }

  return (
    <>
      <AppHeader routes={routes} />

      <main
        className={`main ${prefs.isDarkMode ? 'dark-mode' : ''} ${
          prefs.isEnglish ? 'english' : ''
        }`}
      >
        <NewsBanner />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </main>
      <AppFooter />
    </>
  )
}

export default App
