import React from 'react'

import './Paragraph.css'

export default ({ title = '', children }) => (
  <div className="paragraph-container">
    <div className="paragraph-title">{title}</div>
    <div className="paragraph-content">{children}</div>
  </div>
)
