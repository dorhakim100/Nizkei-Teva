export interface FloatingButtonProps {
  icon: string
  onClick: () => void
  color: string
}

export function FloatingButton({ icon, onClick, color }: FloatingButtonProps) {
  return (
    <div
      className={`floating-button-container ${color} pointer`}
      onClick={onClick}
    >
      <img src={icon} alt='floating button' />
    </div>
  )
}
