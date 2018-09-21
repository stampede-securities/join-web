import { load } from 'webfontloader'

load({
  google: {
    families: ['Source Sans Pro:300,400,600', 'Open Sans:300,400,600']
  }
})

const theme = {
  breakpoints: {
    medium: {
      floor: '1330px', // For use with max-width
      ceiling: '1331px' // For use with min-width
    },
    small: {
      floor: '900px',
      ceiling: '901px'
    },
    mobile: {
      floor: '414px',
      ceiling: '415px'
    }
  }
}

export default theme
