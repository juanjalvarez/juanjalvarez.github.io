import React from 'react'

import Base from './Base'
import Analytics from './Analytics'

import Routes from '../../routes'
import Layout from '../../components/templates/layout'

const App = () => (
  <Base>
    <Analytics>
      <Layout>
        <Routes />
      </Layout>
    </Analytics>
  </Base>
)

export default App
