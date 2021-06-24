import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CountryDropdown from './CountryDropdown'


test('Dropdown should contain dropdown items', () => {
  const { getByTestId } = render(<CountryDropdown />)
  const dropdownEl = getByTestId('dropdown')
  const dropdownItemEl = getByTestId('dropdown-item')
  expect(dropdownEl).toContainElement(dropdownItemEl)
})