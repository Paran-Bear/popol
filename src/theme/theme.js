import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

const textColor={light:'#fff',dark:'#212529'}
const colorSet={
blue: '#79A9F5',
indigo: '#C45F90',
purple: '#A16AE8',
pink: '#FC8BC0',
red: '#F85C70',
orange: '#FF8882',
yellow: '#FAD02C',
green: '#A3C14A',
teal: '#20c997',
cyan: '#47D8E0',
white: '#fff',
gray: '#6c757d',
'gray-dark': '#343a40',
primary: '#F85C70',
secondary: '#6c757d',
success: '#A3C14A',
info: '#47D8E0',
warning: '#FF8882',
danger: '#F85C70',
light: '#f8f9fa',
dark: '#343a40',
}
export const Theme = createTheme({
  palette:createPalette({
    primary:{
      main:'#f55d00',
      contrastText:textColor.light
    },
    secondary:{
      main:'#6c757d',contrastText:textColor.light
    },
    success:{
      main:colorSet.success,contrastText:textColor.dark
    },
    warning:{
      main:'#FF8882',contrastText:textColor.dark
    },
    info:{
      main:colorSet.info,contrastText:textColor.dark
    },
    light:{
      main:'#f8f9fa',contrastText:textColor.dark
      ,
    },
    dark:{
      main:'#343a40',contrastText:textColor.light
    },
    text:{
      primary:colorSet.primary,secondary:colorSet.secondary
    }
  }),
  breakpoints: {
    keys: ['lg', 'md', 'sm', 'xl', 'xs','mobile',
      'tablet',
      'laptop',
      'desktop'],
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    }
  },


})

export default Theme