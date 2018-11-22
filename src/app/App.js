import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import Layout from './Layout'

import rootReducer from './reducer'
import theme from '../theme'
import analytics from '../utils/analytics'
import './app.css'

const analyticsEnabled = Boolean(process.env['REACT_APP_ANALYTICS_ENABLED'])

const pageview = path => {
  if (analyticsEnabled) {
    analytics.pageview(path).send()
  }
}

const history = createBrowserHistory()

history.listen(location => {
  pageview(location.pathname)
})

const enhancers = [
  applyMiddleware(routerMiddleware(history))
]
const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__']
if (reduxDevTools) {
  enhancers.push(reduxDevTools())
}
const combinedReducers = combineReducers(rootReducer)
const store = createStore(
  connectRouter(history)(combinedReducers),
  compose(...enhancers)
)

class App extends PureComponent {

  constructor() {
    super()
    window.addEventListener('resize', this.handleWindowResize)
    pageview(window.location.pathname)
  }

  componentWillUnmount = () => window.removeEventListener('resize', this.handleWindowResize)

  handleWindowResize = () => this.forceUpdate()

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <Route path="/" component={Layout} />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
