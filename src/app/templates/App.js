import React from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import Analytics from './Analytics'
import Layout from '../../components/templates/Layout'

import rootReducer from '../../reducer'
import theme from '../../theme'
import '../app.css'

const history = createBrowserHistory()

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

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Analytics>
          <Route path="/" component={Layout} />
        </Analytics>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
)

export default App
