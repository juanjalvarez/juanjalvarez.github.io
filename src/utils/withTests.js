
import withTests from 'storybook-addon-jest'

import testResults from '../../.jest-test-results.json'

export default component => withTests(testResults, {
  filesExt: '.test.js'
})(component)
