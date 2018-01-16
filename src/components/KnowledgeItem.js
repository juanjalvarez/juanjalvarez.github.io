import React from 'react'

import './KnowledgeItem.css'

export default ({ img, title, children }) => (
  <div className="knowledge-item-container">
    <img
      alt=""
      src={img}
      className="knowledge-item-img"
    />
    <div className="knowledge-item-text">
      <div className="knowledge-item-title">{title}</div>
      <div className="knowledge-item-description">{children}</div>
    </div>
  </div>
)
