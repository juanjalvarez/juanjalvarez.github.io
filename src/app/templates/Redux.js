import React from 'react'
import PropTypes from 'prop-types'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from '../../reducer'

const enhancers = []
const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__']
if (reduxDevTools) {
  enhancers.push(reduxDevTools())
}
const store = createStore(
  combineReducers(rootReducer),
  compose(...enhancers)
)

const Redux = ({
  children
}) => <Provider store={store}>{children}</Provider>

Redux.propTypes = {
  children: PropTypes.element
}

export default Redux
