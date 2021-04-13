import React from 'react'
import { GiPrayerBeads, GiEarrings, GiPowerRing } from 'react-icons/gi'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'shop',
    url: '/shop',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiPrayerBeads />,
    title: 'SHINE',
    text:
      'Coming Soon!',
  },
  {
    id: 2,
    icon: <GiPowerRing />,
    title: 'KEEP',
    text:
      'Coming Soon!',
  },
  {
    id: 3,
    icon: <GiEarrings />,
    title: 'GIFTS',
    text:
      'Coming Soon!',
  },
]

//export const products_url = 'https://course-api.com/react-store-products'
//export const single_product_url = `https://course-api.com/react-store-single-product?id=`
