
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#FFCF4B', // Main- Light Yellow
        main: '#27AE60', // Dark- Yellow
        dark: '#FFBB00', // Logo Color
      },
      secondary: {
        light: "#F9F9F9",// Light Grey
        main: "#CEC6C6", // Dark Grey
        dark: "#000000", // Logo Color
      },
      text: {
        primary: "#263238",  // Very Drak Grey
        secondary: "#65624C" // Drak Grey
      },
      common: {
        white: '#FFF',
        black: '#000'
      },
      grey: {
        50: "#F9FAFF", // Background color
        100: "#E0E0E0", // Grey 5,
        200: "#B7B6B8", // Grey 4,
        300: "#828282", // Grey 3,
        400: "#4F4F4F", // Grey 2
        500: "#333333"  // Grey 1
      },
      divider: "#EEE7E7CC"
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
        }
    }
  });


export default theme;