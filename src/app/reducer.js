import * as themes from '../themes'

const initialState = {
  theme: themes.light
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    default: {
      return state
    }
  }
}
