// routes.ts
import React from 'react'

import { Home } from '../../pages/Home/Home'

export interface Route {
  title: string
  path: string
  element: React.ComponentType
  icon: React.ComponentType
}

import HomeIcon from '@mui/icons-material/Home'

export const routes: Route[] = [
  {
    title: 'Home',
    path: '/',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: 'Home',
    path: '/',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: 'Home',
    path: '/',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: 'Home',
    path: '/',
    element: Home,
    icon: HomeIcon,
  },
]
