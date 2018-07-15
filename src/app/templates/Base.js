import React from 'react'
import PropTypes from 'prop-types'

import Router from './Router'
import JSS from './JSS'
import Redux from './Redux'

import '../app.css'

const Base = ({
  children
}) => (
  <Redux>
    <JSS>
      <Router>
        {children}
      </Router>
    </JSS>
  </Redux>
)

Base.propTypes = {
  children: PropTypes.element
}

export default Base
