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
      title: 'English',
      onClick: () => setPrefs({ ...prefs, language: 'en' }),
    },
    {
      title: 'עברית',
      onClick: () => setPrefs({ ...prefs, language: 'he' }),
    },
  ]

  return (
    <div className='language-picker'>
      <DropdownMenu options={options} renderElement={children} />
    </div>
  )
}

export default LanguagePicker
