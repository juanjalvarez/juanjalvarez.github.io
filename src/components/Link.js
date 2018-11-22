import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = props => {
  const {
    external,
    to,
    children
  } = props
  return (
    external ? (
      <a {...props} href={to} rel="noopener noreferrer" target="_blank">{children}</a>
    ) : (
      <RouterLink {...props}>{children}</RouterLink>
    )
  )
}

export default Link
