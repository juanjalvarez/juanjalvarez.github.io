import * as constants from './constants'

export const setIsBlurred = isBlurred => ({
  type: constants.SET_IS_BLURRED,
  isBlurred,
})

export const setActivePage = activePage => ({
  type: constants.SET_ACTIVE_PAGE,
  activePage,
})
