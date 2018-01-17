import React from 'react'

import './Tag.css'

export default ({ url, children }) => (
  <a
    href={url}
    target="_blank"
    className="tag-link"
  >
    #{children}
  </a>
)
