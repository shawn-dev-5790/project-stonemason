import { useAppDispatch, useAppSelector } from '../../../lib/react-redux'
import { selector, actions } from '@/lib/react-redux/slices/HomeReadSlice'
import AppSuspense from '@/lib/react-router-dom/components/AppSuspense'
import AppErrorBoundary from '@/lib/react-router-dom/components/AppErrorBoundary'
import { useHomeLanguagePack } from './hooks/useHomeLanguagePack'
import { useCallback, useEffect } from 'react'

export default function Home() {
  const lang = useHomeLanguagePack()

  return (
    <AppErrorBoundary fallback={'@error...'}>
      <AppSuspense fallback={'@loading...'}>
        <div>
          <h1>title {lang.i18n.k}</h1>
          <div>
            <PageContent d={fetchUser('1')} />
          </div>
        </div>
      </AppSuspense>
    </AppErrorBoundary>
  )
}

function PageContent({ d }: { d: any }) {
  const user = d.read()
  const dispatch = useAppDispatch()
  const uc = useAppSelector(selector.uc)

  // dispatchers
  const onDecreaseCount = () => {
    dispatch(actions.onUpdateCount(uc.getCount() - 1))
  }
  const onIncreaseCount = () => {
    dispatch(actions.onUpdateCount(uc.getCount() + 1))
  }
  const onRequestGetUserById = useCallback(() => {
    const req = {
      code: '200',
      message: 'success',
      data: { user: user.name },
    }
    dispatch(actions.onUpdateApiSite(req))
  }, [dispatch, user.name])

  const onReset = useCallback(() => {
    dispatch(actions.onReset())
    console.log('reset')
  }, [dispatch])

  // effects
  useEffect(() => onRequestGetUserById(), [dispatch, onRequestGetUserById])
  useEffect(() => () => onReset(), [dispatch, onReset])

  return (
    <div>
      <strong>counter</strong>
      <button onClick={onDecreaseCount}>decrease</button>
      <span>{uc.getCount()}</span>
      <button onClick={onIncreaseCount}>increase</button>
    </div>
  )
}

function fetchUser(userId: string) {
  let user: any = null
  const suspender = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data
      }, 1000)
    })
  return {
    read() {
      if (user === null) {
        throw suspender
      } else {
        return user
      }
    },
  }
}
