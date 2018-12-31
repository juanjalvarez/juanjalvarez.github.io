import React, { PureComponent } from 'react'
import { Route, Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import moment from 'moment'

import Layout from './Layout'
import analytics from '../utils/analytics'
import rootReducer from '../reducer'
import theme from '../theme'
import * as actions from './actions'
import './app.css'

const history = createBrowserHistory()
history.listen(analytics)

const enhancers = []
const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__']
if (reduxDevTools) {
  enhancers.push(reduxDevTools())
}
const combinedReducers = combineReducers(rootReducer)
const store = createStore(combinedReducers, {}, compose(...enhancers))

setTimeout(() => {
  localStorage.setItem('lastAccessed', moment().format('YYYY-MM-DD'))
  store.dispatch(actions.disableInitialAnimation())
}, 3500)

class App extends PureComponent {

  constructor() {
    super()
    window.addEventListener('resize', this.handleWindowResize)
    analytics(window.location)
  }

  componentWillUnmount = () => window.removeEventListener('resize', this.handleWindowResize)

  handleWindowResize = () => this.forceUpdate()

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Route path="/" component={Layout} />
          </ThemeProvider>
        </Router>
      </Provider>
    )
  }
}

export default App
