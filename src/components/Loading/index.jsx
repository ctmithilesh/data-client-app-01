import React from 'react'
import Skeleton from 'react-loading-skeleton'
export default function Loading() {
  return (
    <Skeleton count={1} /> // Five-line loading skeleton
  )
}
