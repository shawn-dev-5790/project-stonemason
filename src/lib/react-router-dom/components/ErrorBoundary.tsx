import { ErrorBoundary } from 'react-error-boundary'

export interface IAppErrorBoundary {
  fallback?: React.ReactNode
  children: React.ReactNode
}

export default function AppErrorBoundary({ children, fallback }: IAppErrorBoundary) {
  return (
    <ErrorBoundary
      onReset={(details: any) => {
        console.log('ErrorBoundary.onReset', details)
      }}
      onError={(err: any) => {
        console.log('ErrorBoundary.onError', err)
      }}
      fallbackRender={({ resetErrorBoundary }) => fallback}
    >
      {children}
    </ErrorBoundary>
  )
}
