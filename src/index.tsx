import './index.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './lib/react-router-dom/AppRouters'
import { globalStore } from './lib/react-redux/globalStore'
import { onChangeLang } from './lib/intl/helpers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={globalStore}>
    <IntlProvider {...onChangeLang(localStorage.getItem('locale') || 'ko')}>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </IntlProvider>
  </Provider>
)
