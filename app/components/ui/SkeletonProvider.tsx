'use client'

import { ReactNode } from 'react'
import { SkeletonStyles } from './Skeleton'

export default function SkeletonProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <SkeletonStyles />
      {children}
    </>
  )
}
