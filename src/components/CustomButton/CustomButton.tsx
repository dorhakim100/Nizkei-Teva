import { useSelector } from 'react-redux'

import { PropsWithChildren } from 'react'
import { RootState } from '../../store/store'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

type CustomButtonProps = {
  onClick: () => void
  icon?: React.ReactNode
  color?: string
}
export function CustomButton({
  children,
  onClick,
  icon,
  color = 'primary',
}: PropsWithChildren<CustomButtonProps>) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  return (
    <button
      className={`custom-button ${color} ${prefs.language}`}
      onClick={onClick}
    >
      {icon}
      {children}
      {prefs.language === 'en' && <KeyboardArrowRightIcon />}
      {prefs.language === 'he' && <KeyboardArrowLeftIcon />}
    </button>
  )
}
