import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

import {
  FloatingButton,
  FloatingButtonProps,
} from '../FloatingButton/FloatingButton'

export function FloatingButtonsContainer({
  items,
}: {
  items: FloatingButtonProps[]
}) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  return (
    <div className={`floating-buttons-container ${prefs.language}`}>
      {items.map((item) => (
        <FloatingButton
          key={item.icon}
          icon={item.icon}
          color={item.color}
          onClick={item.onClick}
        />
      ))}
    </div>
  )
}
