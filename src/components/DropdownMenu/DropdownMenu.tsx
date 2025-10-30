import React from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { RootState } from '../../store/store'
import { setIsHeader } from '../../store/actions/system.actions'
import { useSelector } from 'react-redux'
import { DropdownOption } from '../../types/DropdownOption'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

interface DropdownMenuProps {
  options: DropdownOption[]
  renderElement?: () => React.ReactNode
  renderArrow?: boolean
}

export function DropdownMenu({
  options,
  renderElement,
  renderArrow = false,
}: DropdownMenuProps) {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  const isHeader = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.isHeader
  )

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setIsHeader(!isHeader)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setIsHeader(false)
  }

  function renderIcon() {
    return (
      <IconButton
        sx={{
          p: '10px',

          color: prefs.isDarkMode ? '#fff' : '#000',
          '&:focus': {
            outline: 'none',
          },
        }}
        aria-label='menu'
      >
        {isHeader ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
    )
  }

  return (
    <div className='dropdown-menu'>
      <div className='render-element-container pointer' onClick={handleClick}>
        {renderArrow &&
          prefs.language === 'en' &&
          (isHeader ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
        {renderElement ? renderElement() : renderIcon()}
        {renderArrow &&
          prefs.language !== 'en' &&
          (isHeader ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
      </div>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        disableScrollLock
        PaperProps={{
          sx: {
            bgcolor: prefs.isDarkMode ? '#222' : '#fff',
            color: prefs.isDarkMode ? '#fff' : '#000',
            minWidth: 200,
          },
        }}
      >
        {options.map((option: DropdownOption, index: number) => {
          return (
            <MenuItem
              sx={{
                fontSize: '1.2em',
                backgroundColor: prefs.isDarkMode ? '#222' : '#fff',
                color: prefs.isDarkMode ? '#fff' : '#000',
                '&:hover': {
                  backgroundColor: prefs.isDarkMode ? '#111' : '',
                },
              }}
              onClick={(event): void => {
                option.onClick(event)
                handleClose()
              }}
              key={index}
            >
              {option.title}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
