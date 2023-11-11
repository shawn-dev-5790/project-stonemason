import { onChangeLang } from '../intl/helpers'
import css from './AdsLogo.module.css'

export default function AdsLogo() {
  return <></>
}

export function AdsLogoSimple() {
  return (
    <div className={css.wrap_type_simple}>
      <h1>ADS LOGO</h1>
      <button
        onClick={() => {
          localStorage.getItem('locale') === 'ko'
            ? onChangeLang('en')
            : onChangeLang('ko')
          window.location.reload()
        }}
      >
        {localStorage.getItem('locale')}
      </button>
    </div>
  )
}
