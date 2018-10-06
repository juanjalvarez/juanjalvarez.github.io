import * as constants from './constants'

const initialState = {
  isBlurred: false
}

export default (state = initialState, action) => {
  const { type, isBlurred } = action
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
