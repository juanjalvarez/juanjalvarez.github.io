import * as constants from './constants'
import moment from 'moment'

const initialState = {
  isBlurred: false,
  lastAccessed: localStorage.getItem('lastAccessed')
}

export default (state = initialState, action) => {
  const { type, isBlurred } = action
  localStorage.setItem('lastAccessed', moment().format('YYYY-MM-DD'))
  switch (type) {
    case constants.SET_IS_BLURRED: {
      return {
        ...state,
        isBlurred
      }
    }
    default: {
      return state
    }
  }
}
