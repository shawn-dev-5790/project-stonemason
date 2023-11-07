import './index.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { globalStore } from './lib/react-redux/globalStore'
import AppRouters from './lib/react-router-dom/AppRouters'
import { BrowserRouter } from 'react-router-dom'

const LANG_CODE = 'en'
const LANG_PACK = { k: '1' }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={globalStore}>
    <IntlProvider locale={LANG_CODE} messages={LANG_PACK}>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </IntlProvider>
  </Provider>
)
