import css from './User.module.css'

import AppErrorBoundary from '@/lib/react-router-dom/components/AppErrorBoundary'
import { CustomSuspense } from '@/lib/react-router-dom/components/AppSuspense'
import useUsersLanguagePack from './hooks/useUserLanguagePack'
import { useAppDispatch, useAppSelector } from '@/lib/react-redux'
import { useEffect } from 'react'
import { actions, selector } from './User.slice'
import UserUseCase from '@/core/application/usecases/User.uc'

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

  return (
    <CustomSuspense flag={!!uc.user} fallback={'@custom-suspense-loading...'}>
      <div>
        <pre>{JSON.stringify(uc.user, null, 2)}</pre>
      </div>
    </CustomSuspense>
  )
}
