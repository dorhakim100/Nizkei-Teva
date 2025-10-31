import { useMemo, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Language } from '../../types/system/Languages'

import Marquee from 'react-fast-marquee'

import { PlayButton } from '../PlayButton/PlayButton'

import newsBannerJson from '../../assets/jsons/header/news-banner.json'

import Divider from '@mui/material/Divider'

export function NewsBanner() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )

  const [isPlaying, setIsPlaying] = useState(true)

  const direction = useMemo(() => {
    switch (prefs.language) {
      case 'he':
        return 'right'
      case 'en':
        return 'left'
      default:
        return 'right'
    }
  }, [prefs.language])

  const setPlaying = () => {
    setIsPlaying(true)
  }

  const setPaused = () => {
    setIsPlaying(false)
  }

  const togglePlaying = () => {
    setIsPlaying((prevState) => !prevState)
  }

  return (
    <div className={`news-banner ${prefs.language}`}>
      <PlayButton isPlaying={isPlaying} onClick={togglePlaying} />
      <h2 className='title'>
        {newsBannerJson.title[prefs.language as keyof Language]}
      </h2>
      <Divider orientation='vertical' flexItem className='divider' />
      <div
        className='message-container'
        onMouseEnter={setPaused}
        onMouseLeave={setPlaying}
      >
        <Marquee
          direction={direction}
          className={`message ${direction}`}
          play={isPlaying}
        >
          {newsBannerJson.message[prefs.language as keyof Language]}
        </Marquee>
      </div>
    </div>
  )
}
