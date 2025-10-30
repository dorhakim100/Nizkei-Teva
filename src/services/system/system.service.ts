import { Prefs } from '../../types/system/Prefs'

const KEY = 'prefs'

export const systemService = {
  getPrefs,
  setPrefs,
}

export function getPrefs() {
  const entityType = KEY
  let prefs: Prefs = { isEnglish: false, isDarkMode: false }

  if (!localStorage.getItem(entityType)) {
    localStorage.setItem(entityType, JSON.stringify(prefs))
  } else {
    const strStorage = localStorage.getItem(entityType)
    if (!strStorage) return prefs
    prefs = JSON.parse(strStorage)
  }

  return prefs
}

export function setPrefs(prefs: Prefs) {
  const entityType = 'prefs'
  localStorage.setItem(entityType, JSON.stringify(prefs))
}
