// routes.ts
import React from 'react'
import { Language } from '../../types/system/Languages'

import { Home } from '../../pages/Home/Home'

export interface Route {
  title: Language
  path: string
  element: React.ComponentType
  icon: React.ComponentType
}

import HomeIcon from '@mui/icons-material/Home'

import headerJson from '../jsons/header.json'

export const routes: Route[] = [
  {
    title: headerJson.home,
    path: '/',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: headerJson.insurance,
    path: '/insurance',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: headerJson.about,
    path: '/about',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: headerJson.news,
    path: '/news',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: headerJson.client,
    path: '/client',
    element: Home,
    icon: HomeIcon,
  },
]
