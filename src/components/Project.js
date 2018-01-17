import React from 'react'
import { Icon } from 'react-fa'

import './Project.css'

export default ({
  name = '',
  isPrivate = false,
  tags = [],
  children
}) => (
  <div className="project-container">
    <div className="project-header">
      <div className="project-name">{name}</div>
      <div className={isPrivate ? 'project-private' : 'project-public'}>{isPrivate ? 'private' : 'public'} <Icon name="circle" /></div>
    </div>
    <div className="project-content">{children}</div>
    <div className="project-tags">
      {
        tags.map(e => e)
      }
    </div>
  </div>
)
