import React from 'react'

import './KnowledgeSection.css'

export default ({ children, yellow = false }) => (
  <div className="knowledge-section-container">
    <div className={`knowledge-section-bar ${yellow ? 'knowledge-section-yellow' : ''}`} />
    <div className="knowledge-section-content">{children}</div>
  </div>
)
