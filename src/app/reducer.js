import * as constants from './constants'
import moment from 'moment'

const initialState = {
  isBlurred: false,
  shouldRenderInitialAnimation: localStorage.getItem('lastAccessed') !== moment().format('YYYY-MM-DD'),
  activePage: null,
}

export default (state = initialState, action) => {
  const { type, isBlurred, activePage } = action
  switch (type) {
    case constants.SET_IS_BLURRED: {
      return {
        ...state,
        isBlurred,
      }
    }
    case constants.SET_ACTIVE_PAGE: {
      return {
        ...state,
        activePage,
      }
    }
    default: {
      return state
    }
  }
}
