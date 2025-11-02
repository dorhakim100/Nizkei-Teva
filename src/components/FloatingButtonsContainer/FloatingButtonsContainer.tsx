import {
  FloatingButton,
  FloatingButtonProps,
} from '../FloatingButton/FloatingButton'

export function FloatingButtonsContainer({
  items,
}: {
  items: FloatingButtonProps[]
}) {
  return (
    <div className='floating-buttons-container'>
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
