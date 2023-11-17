import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './lib/react-router-dom/AppRouters'
import GlobalStyle, { THEME_LIGHT } from './lib/styled-components/GlobalStyle'
import { globalStore } from './lib/react-redux/globalStore'
import { getLangData } from './lib/intl/helpers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={globalStore}>
    <IntlProvider locale={getLangData.locale} messages={getLangData.messages}>
      <ThemeProvider theme={THEME_LIGHT}>
        <GlobalStyle />
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>
  </Provider>
)
