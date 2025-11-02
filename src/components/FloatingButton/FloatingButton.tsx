export interface FloatingButtonProps {
  icon: string
  onClick: () => void
  color: string
}

export function FloatingButton({ icon, onClick }: FloatingButtonProps) {
  return (
    <div className='floating-button-container'>
      <img src={icon} alt='floating button' />
      <button onClick={onClick}>
        <img src={icon} alt='floating button' />
      </button>
    </div>
  )
}
