import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './lib/react-router-dom/AppRouters'
import StyleManager from './lib/styled-components/StyleManager'
import StoreManager from './lib/react-redux/StoreManager'
import LanguageManager from './lib/intl/LanguageManager'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={StoreManager.store}>
    <IntlProvider locale={LanguageManager.locale} messages={LanguageManager.message}>
      <ThemeProvider theme={StyleManager.light}>
        <StyleManager.GlobalStyle />
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>
  </Provider>
)
