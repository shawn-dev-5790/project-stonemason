import { Suspense } from 'react'

export interface IAppSuspense {
  fallback?: React.ReactNode
  children: React.ReactNode
}

export default function AppSuspense({ children, fallback }: IAppSuspense) {
  return <Suspense fallback={fallback ? fallback : 'loading...'} children={children} />
}
