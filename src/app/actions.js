import * as constants from './constants'

export const setIsBlurred = isBlurred => ({
  type: constants.SET_IS_BLURRED,
  isBlurred,
})

export const setActivePage = activePage => ({
  type: constants.SET_ACTIVE_PAGE,
  activePage,
})

export const setIsNavOpen = isNavOpen => ({
  type: constants.SET_IS_NAV_OPEN,
  isNavOpen,
})

export const disableInitialAnimation = () => ({
  type: constants.DISABLE_INITIAL_ANIMATION,
})
