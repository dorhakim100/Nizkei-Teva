import React from 'react'
import { useSelector } from 'react-redux'

import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

import { RootState } from '../../store/store'
import { setPrefs } from '../../store/actions/system.actions'

import { DropdownOption } from '../../types/DropdownOption'

interface LanguagePickerProps {
  children?: () => React.ReactNode
}

export function LanguagePicker({ children }: LanguagePickerProps) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  const options: DropdownOption[] = [
    {
      title: 'עברית',
      onClick: () => handleLanguageChange('he'),
    },
    {
      title: 'English',
      onClick: () => handleLanguageChange('en'),
    },
  ]

  function handleLanguageChange(language: string) {
    setPrefs({ ...prefs, language })
  }

  return (
    <div className='language-picker'>
      <DropdownMenu
        options={options}
        renderElement={children}
        renderArrow={true}
      />
    </div>
  )
}

export default LanguagePicker
