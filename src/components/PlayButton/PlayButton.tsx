import React from 'react'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'

type PlayButtonProps = {
  isPlaying: boolean
  onClick: () => void
}

export function PlayButton({ isPlaying, onClick }: PlayButtonProps) {
  if (isPlaying) {
    return <PauseCircleOutlineIcon onClick={onClick} className='pointer' />
  }
  return <PlayCircleOutlineIcon onClick={onClick} className='pointer' />
}
