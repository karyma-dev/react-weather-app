import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ForecastPage from './ForecastPage'
import getCurrentWeather from '../api/getCurrentWeather'
import axios from 'axios'

jest.mock('axios')

test('Returns', async () => {
  axios.get.mockRejectedValue('Network error: Something went wrong')
  
  axios.get.mockResolvedValue({
      weather: [
        {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
        }
      ]
  })
  
  const response = await getCurrentWeather()

  expect(response.weather[0].main).toEqual('Clear')
})