import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IntlProvider } from 'react-intl';
import theme from './styles/theme';
import messages from './constants/messages';
import HomePage from './pages/HomePage';
import { Box, Container } from '@mui/material';
import Footer from './components/layout/Footer';

const App: React.FC = () => (
  <IntlProvider messages={messages.en} locale="en" defaultLocale="en">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: '1440px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <HomePage />
      </Box>
      <Footer />
    </ThemeProvider>
  </IntlProvider>
);

export default App;
