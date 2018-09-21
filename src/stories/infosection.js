import React from 'react'
import { storiesOf } from '@storybook/react'
import InfoSection from '../containers/Home/components/InfoSection'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import chart from '../containers/Home/chart.png'

storiesOf('Info Section', module).add('InfoSection', () => (
  <ThemeProvider theme={theme}>
    <div style={{ width: 320 }}>
      <InfoSection
        header="Potential Returns"
        text="Investments are risky and returns are never guaranteed, but if the project is successful there is a potential for returns"
        img={chart}
      />
    </div>
  </ThemeProvider>
))
