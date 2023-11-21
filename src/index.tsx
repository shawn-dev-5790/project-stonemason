import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './lib/react-router-dom/AppRouters'
import AppStyle, { THEME_LIGHT } from './lib/styled-components/AppStyle'
import AppStore from './lib/react-redux/AppStore'
import LanguageManager from './lib/intl/LanguageManager'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={AppStore}>
    <IntlProvider locale={LanguageManager.locale} messages={LanguageManager.message}>
      <ThemeProvider theme={THEME_LIGHT}>
        <AppStyle />
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>
  </Provider>
)
