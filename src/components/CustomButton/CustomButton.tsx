import { useSelector } from 'react-redux'

import { PropsWithChildren } from 'react'
import { RootState } from '../../store/store'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

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
    <button className={`custom-button ${color}`} onClick={onClick}>
      {prefs.language === 'he' ? <ArrowBackIosNewIcon /> : icon}
      {children}
      {prefs.language === 'en' ? icon : <ArrowForwardIosIcon />}
    </button>
  )
}
