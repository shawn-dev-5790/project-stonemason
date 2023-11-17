import AppLanguage from '../intl/AppLanguage'
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
          AppLanguage.onChangeLangTo(prompt('insert lang code') as string)
          
        }}
      >
        {localStorage.getItem('locale')}
      </button>
    </div>
  )
}
