import * as constants from './constants'
import moment from 'moment'

const initialState = {
  isBlurred: false,
  shouldRenderInitialAnimation: localStorage.getItem('lastAccessed') !== moment().format('YYYY-MM-DD'),
  activePage: null,
  isNavOpen: false,
}

export default (state = initialState, action) => {
  const { type, isBlurred, activePage, isNavOpen } = action
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
    case constants.SET_IS_NAV_OPEN: {
      return {
        ...state,
        isNavOpen,
      }
    }
    default: {
      return state
    }
  }
}
