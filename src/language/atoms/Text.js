import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import localization from '../localization.json'

const Text = ({
  strings,
  name
}) => {
  let text = ''
  if (strings) {
    text = strings[name]
  } else {
    text = localization['strings']['name']['en']
  }
  return <span>{text}</span>
}

Text.propTypes = {
  strings: PropTypes.object,
  name: PropTypes.string
}

const mapStateToProps = state => ({
  strings: state.language.strings
})

export default connect(mapStateToProps)(Text)
