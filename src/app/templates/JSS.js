import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'react-jss'

const appStyling = ({
  theme,
  children
}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

appStyling.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({
  theme: state.app.theme
})

export default connect(mapStateToProps)(appStyling)
