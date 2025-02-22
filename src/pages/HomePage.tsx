import React from 'react';
import Header from '../components/layout/Header';
import { Box } from '@mui/material';


const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            mt: { xs: '7.2rem', md: '9rem' },
          }}
        >
          <h1>Bhive</h1>
        </Box>
      </main>
    </>
  );
};

export default HomePage;
