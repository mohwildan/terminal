'use client'

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

export default function Home() {
  const Terminal = dynamic(() => import('@/components/customs/Terminal'), {
    ssr: false,
  })
  return <Terminal />
}
