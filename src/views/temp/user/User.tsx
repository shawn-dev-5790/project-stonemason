import css from './User.module.css'

import AppErrorBoundary from '@/lib/react-router-dom/components/AppErrorBoundary'
import { CustomSuspense } from '@/lib/react-router-dom/components/AppSuspense'
import useUsersLanguagePack from './_hooks/useUserLanguagePack'
import { useEffect, useState } from 'react'
import { actions, selector } from './User.slice'
import UserUseCase from '@/dtr/application/usecases/User.uc'
import { useAppDispatch, useAppSelector } from '@/lib/react-redux/AppStore'

export default function User() {
  const dispatch = useAppDispatch()
  const lang = useUsersLanguagePack()

  useEffect(() => {
    dispatch(actions.onUpdateApiUser('1'))

    return () => {
      dispatch(actions.onReset())
    }
  }, [dispatch])

  setTimeout(() => {
    dispatch(actions.onUpdateApiUser('2'))
  }, 3000)

  console.log('page render')

  return (
    <AppErrorBoundary fallback={'@error...'}>
      <div className={css.wrap_users}>
        <h1>title {lang.static.k}</h1>
        <PageContent />
      </div>
    </AppErrorBoundary>
  )
}

function PageContent() {
  const uc = new UserUseCase(useAppSelector(selector.slice))
  console.log('api call')
  return (
    <CustomSuspense flag={!!uc.user} fallback={'@custom-suspense-loading...'}>
      <Test />
      <div>
        <pre>{JSON.stringify(uc.user, null, 2)}</pre>
      </div>
    </CustomSuspense>
  )
}

function Test() {
  const lang = useUsersLanguagePack()
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{lang.static.k1}</div>
      <div>
        {lang.static.k2({
          c1: (v: React.ReactNode) => <i style={{ color: 'red' }}>{v}</i>,
          c2: (v: React.ReactNode) => <i style={{ color: 'green' }}>{v}</i>,
          c3: (v: React.ReactNode) => <i style={{ color: 'yellow' }}>{v}</i>,
          c4: (v: React.ReactNode) => <i style={{ color: 'gold' }}>{v}</i>,
          c5: (v: React.ReactNode) => <i style={{ color: 'blue' }}>{v}</i>,
        })}
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          + add Count
        </button>
        {/* https://formatjs.io/docs/core-concepts/icu-syntax : 단복수는 요기도 한번 고민을... */}
        {lang.static.k3({ n: count > 1 ? `${count}days` : `${count}day` })}
      </div>
    </div>
  )
}
