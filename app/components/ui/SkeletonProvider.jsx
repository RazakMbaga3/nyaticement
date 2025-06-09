'use client'

import { SkeletonStyles } from './Skeleton'

export default function SkeletonProvider({ children }) {
  return (
    <>
      <SkeletonStyles />
      {children}
    </>
  )
}
