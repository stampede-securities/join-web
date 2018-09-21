import React from 'react'
import { storiesOf } from '@storybook/react'
import InvestmentCard from '../components/InvestmentCard'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import img from './card_img.jpg'

const entry = {
  img,
  name: 'Rubin Report',
  category: 'Influencers',
  amountGoal: 500000,
  amountRaised: 0,
  endDate: '2019-01-20T14:57:11.395Z',
  company: 'Rubin Report, LLC',
  location: 'Newport Beach, CA, USA'
}

storiesOf('Investment Card', module).add('Card', () => (
  <ThemeProvider theme={theme}>
    <InvestmentCard entry={entry} />
  </ThemeProvider>
))
