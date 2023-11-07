import { ErrorBoundary } from 'react-error-boundary'

export interface IAppErrorBoundary {
  fallback?: React.ReactNode | any
  children: React.ReactNode
}

export default function AppErrorBoundary({ children, fallback }: IAppErrorBoundary) {
  //   const onLogError: ((error: Error, info: React.ErrorInfo) => void) | undefined = (error, info) => {
  //     console.log(error)
  //     console.log(info)
  //   }
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
