import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../../components/organisms/Modal'

const ExperienceModal = props => {
  return (
    <Modal
      onOutsideClick={() => props.history.push('/experience')}
    >
      THIS IS THE TEST MODAL
    </Modal>
  )
}

ExperienceModal.propTypes = {
  history: PropTypes.object.isRequired
}

export default ExperienceModal
