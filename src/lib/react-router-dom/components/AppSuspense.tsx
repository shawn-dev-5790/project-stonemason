import { Suspense, useEffect, useMemo, useState } from 'react'
import AppLoader from './AppLoader'

export interface IAppSuspense {
  fallback?: React.ReactNode
  children: React.ReactNode
}

export default function AppSuspense({ children, fallback }: IAppSuspense) {
  return <Suspense fallback={fallback ? fallback : <AppLoader />} children={children} />
}

let cache: any = null
let update: any = 0
export function CustomSuspense({ flag, fallback, children }: { flag: boolean; fallback: React.ReactNode; children: React.ReactNode }) {
  if (flag && cache) {
    cache = children
  } else {
    cache = cache ? cache : children
  }

  // console.table({
  //   flag,
  //   update,
  //   cache,
  // })
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '350px',
        width: '350px',
      }}
    >
      {cache}
      <div
        style={{
          display: flag ? 'none' : 'flex',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.5)',
        }}
      >
        loading
      </div>
    </div>
  )
}
