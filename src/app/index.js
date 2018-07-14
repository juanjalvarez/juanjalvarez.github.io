import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'react-jss'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import Routes from '../routes'
import Layout from '../components/templates/Layout'

import rootReducer from '../reducer'

import './index.css'

const history = createHistory()
const routingMiddleware = routerMiddleware(history)

const enhancers = [applyMiddleware(routingMiddleware)]
const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__']
if (reduxDevTools) {
  enhancers.push(reduxDevTools())
}
const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  compose(...enhancers)
)

const appStyling = ({
  theme,
  children
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

appStyling.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({
  theme: state.app.theme
})

const AppStyling = connect(mapStateToProps)(appStyling)

const App = () => (
  <Provider store={store}>
    <AppStyling>
      <ConnectedRouter history={history}>
        <Layout>
          <Routes />
        </Layout>
      </ConnectedRouter>
    </AppStyling>
  </Provider>
)

export default App
