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

import routesJson from '../jsons/header/routes.json'

export const routes: Route[] = [
  {
    title: routesJson.home,
    path: '/',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: routesJson.insurance,
    path: '/insurance',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: routesJson.about,
    path: '/about',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: routesJson.news,
    path: '/news',
    element: Home,
    icon: HomeIcon,
  },
  {
    title: routesJson.client,
    path: '/client',
    element: Home,
    icon: HomeIcon,
  },
]
