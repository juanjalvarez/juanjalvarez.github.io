import localization from './localization.json'
import * as constants from './constants'

const getLanguage = langCode => {
  const strings = localization['strings']
  const lang = {}
  for (const key of Object.keys(strings)) {
    lang[key] = strings[key][langCode]
  }
  return lang
}

const initialState = {
  langCode: 'en',
  strings: getLanguage('en')
}

export default (state = initialState, action) => {
  const { type, langCode } = action
  switch (type) {
    case constants.SET_LANGUAGE: {
      return {
        langCode,
        strings: getLanguage(langCode)
      }
    }
    default: {
      return state
    }
  }
}
