import * as constants from './constants'

export const setLanguage = langCode => ({
  type: constants.SET_LANGUAGE,
  langCode
})
