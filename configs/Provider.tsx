'use client'

import React from 'react'
import { TourProvider } from '@reactour/tour'
import { ThemeProvider } from 'next-themes'

import steps from './step'

export default function Provider({ children }: IChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <TourProvider steps={steps}>{children}</TourProvider>
    </ThemeProvider>
  )
}
