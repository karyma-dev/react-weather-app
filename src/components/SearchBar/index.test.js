import React from 'react'
import renderer from 'react-test-renderer'

import SearchBar from './index'

test('SearchBar Component should match snapshot', () => {
  const tree = renderer.create(<SearchBar/>).toJSON()
  expect(tree).toMatchSnapshot()
})